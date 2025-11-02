import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps'; // Circle olib tashlandi
import { LocationType, Props } from './types';
import { $trigger, styles } from './styles';
import SearchNeighborhoodModal from './SearchNeighborhood';
import { Button } from '../../../../components';
import { colors } from '../../../../theme';
import { expandBoundingBox, bboxToPolygon } from '../../../../utils/mapHelpers';

const MIN_LEVEL = 1;
const MAX_LEVEL = 3;
const AnyMapView = MapView as any;

const NeighborhoodSettings = ({
  visible,
  onClose,
  location,
  onLocationsChange,
  onSelectedLocationChange,
  autoOpenSecond,
  initialLocations,
}: Props) => {
  const mapRef = useRef<MapView>(null);
  const [boundaryLevel, setBoundaryLevel] = useState(MIN_LEVEL);
  const [locations, setLocations] = useState<(LocationType | null)[]>(initialLocations ?? [null, null]);
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);
  const [activeModal, setActiveModal] = useState<1 | 2 | null>(null);

  // Region hisoblash — xavfsiz
  const getLevelRegion = (level: number) => {
    if (!selectedLocation || !selectedLocation.boundingBox || selectedLocation.boundingBox.length < 4) {
      return {
        latitude: selectedLocation?.latitude || location?.latitude || 41.3775,
        longitude: selectedLocation?.longitude || location?.longitude || 64.5853,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      };
    }

    const sw = selectedLocation.boundingBox[0];
    const ne = selectedLocation.boundingBox[2];
    const bbox = {
      south: sw.latitude,
      west: sw.longitude,
      north: ne.latitude,
      east: ne.longitude,
    };

    let regionBbox;
    if (level === 1) regionBbox = bbox;
    else if (level === 2) regionBbox = expandBoundingBox(bbox, 2);
    else regionBbox = expandBoundingBox(bbox, 5);

    const centerLat = (regionBbox.north + regionBbox.south) / 2;
    const centerLon = (regionBbox.east + regionBbox.west) / 2;
    const latDelta = Math.max(regionBbox.north - regionBbox.south, 0.01);
    const lonDelta = Math.max(regionBbox.east - regionBbox.west, 0.01);

    return { latitude: centerLat, longitude: centerLon, latitudeDelta: latDelta, longitudeDelta: lonDelta };
  };

  // Polygon chizish — xavfsiz
  const getLevelPolygon = (): { latitude: number; longitude: number }[] | null => {
    if (selectedLocation?.polygonPoints && selectedLocation.polygonPoints.length > 3) {
      return selectedLocation.polygonPoints; // ✅ PolygonPoints to'g'ridan-to'g'ri olinadi
    }
  
    if (!selectedLocation?.boundingBox || selectedLocation.boundingBox.length < 4) return null;
  
    const sw = selectedLocation.boundingBox[0];
    const ne = selectedLocation.boundingBox[2];
    const bbox = {
      south: sw.latitude,
      west: sw.longitude,
      north: ne.latitude,
      east: ne.longitude,
    };
  
    let regionBbox;
    if (boundaryLevel === 1) regionBbox = bbox;
    else if (boundaryLevel === 2) regionBbox = expandBoundingBox(bbox, 2);
    else regionBbox = expandBoundingBox(bbox, 5);
  
    return bboxToPolygon(regionBbox);
  };
  
  
  

  const getShortName = (name: string | null | undefined) =>
    name ? name.split(',')[0].split(' ')[0].trim() : null;

  const handleSelect = (
    name: string,
    lat: number,
    lon: number,
    boundingBox?: { latitude: number; longitude: number }[],
    polygonPoints?: { latitude: number; longitude: number }[] // ✅ qo'shildi
  ) => {
    if (activeModal === null) {
      console.warn('No active modal to assign location');
      return;
    }
  
    const id = `${name}_${lat}_${lon}`.replace(/\s+/g, '_').toLowerCase();
    const newLoc: LocationType = {
      id,
      name,
      latitude: lat,
      longitude: lon, 
      boundingBox: boundingBox && boundingBox.length >= 4 ? boundingBox : undefined,
      polygonPoints: polygonPoints && polygonPoints.length > 3 ? polygonPoints : undefined, // ✅ polygon qo'shildi
    };
  
    const index = (activeModal - 1) as 0 | 1;
    const newLocations = [...locations];
    newLocations[index] = newLoc;
  
    setLocations(newLocations);
    setSelectedLocation(newLoc);
    onSelectedLocationChange?.(newLoc);
    setActiveModal(null);
    setBoundaryLevel(MIN_LEVEL);
    onLocationsChange?.(newLocations);
  };
  

  const clearLocation = (index: 0 | 1) => {
    const newLocations = [...locations];
    newLocations[index] = null;
    setLocations(newLocations);
    if (selectedLocation === locations[index]) setSelectedLocation(null);
    onLocationsChange?.(newLocations);
  };

  useEffect(() => {
    if (!visible || !mapRef.current) return;
    const region = getLevelRegion(boundaryLevel);
    mapRef.current.animateToRegion(region, 300);
  }, [visible, selectedLocation, boundaryLevel]);

  useEffect(() => {
    if (location && !locations[0]) {
      const initial: LocationType = { ...location, name: location.name || 'Current' };
      setLocations([initial, null]);
      setSelectedLocation(initial);
    }
  }, [location]);

  useEffect(() => {
    if (visible && autoOpenSecond && locations[1] === null) {
      setActiveModal(2);
    }
  }, [visible, autoOpenSecond, locations]);

  useEffect(() => {
    if (initialLocations) {
      setLocations(initialLocations);
      const isValid = initialLocations.some(loc => loc && selectedLocation && loc.name === selectedLocation.name);
      if (!isValid) setSelectedLocation(null);
    }
  }, [initialLocations]);

  const renderLocationButton = (index: 0 | 1) => {
    const loc = locations[index];
    return (
      <Pressable
        key={index}
        style={styles.addBtn}
        onPress={() => {
          if (loc) {
            setSelectedLocation(loc);
            onSelectedLocationChange?.(loc);
            setBoundaryLevel(MIN_LEVEL);
          } else {
            setActiveModal((index + 1) as 1 | 2);
          }
        }}
      >
        <View
          style={[
            styles.square,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: loc ? 'space-between' : 'center',
              paddingHorizontal: loc ? 10 : 0,
            },
          ]}
        >
          <Text style={styles.plus}>{getShortName(loc?.name) || '+'}</Text>
          {loc && (
            <Pressable
              onPress={e => {
                e.stopPropagation();
                clearLocation(index);
                onSelectedLocationChange?.(null);
              }}
            >
              <Text style={styles.buttonText}>✕</Text>
            </Pressable>
          )}
        </View>
      </Pressable>
    );
  };

  const DEFAULT_REGION = {
    latitude: 41.3775,
    longitude: 64.5853,
    latitudeDelta: 7.0,
    longitudeDelta: 7.0,
  };

  const currentRegion = selectedLocation
    ? getLevelRegion(MIN_LEVEL)
    : location
    ? { ...location, latitudeDelta: 0.1, longitudeDelta: 0.1 }
    : DEFAULT_REGION;

  const getLevelName = (level: number) => {
    if (level === 1) return 'Exact area';
    if (level === 2) return 'Nearby area';
    return 'Wide area';
  };

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <View style={styles.title}>
            <Text style={styles.title}>Manage neighborhood</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.buttonText}>X</Text>
            </Pressable>
          </View>

          <View style={styles.mapBox}>
            <AnyMapView
              ref={mapRef}
              style={{ flex: 1 }}
              initialRegion={currentRegion}
              mapType="standard"
              showsUserLocation
              showsPointsOfInterest
              showsBuildings
              scrollEnabled={false}
              zoomEnabled={false}
              pitchEnabled={false}
              rotateEnabled={false}
            >
              {/* {selectedLocation && (
                <>
                  <Marker coordinate={selectedLocation} title={selectedLocation.name} />
                  {getLevelPolygon() && (
                    <Polygon
                      coordinates={getLevelPolygon()!}
                      strokeColor={colors.darkGreen}
                      fillColor="rgba(13, 119, 94, 0.159)"
                      strokeWidth={3}
                    />
                  )}
                </>
              )} */}
{selectedLocation && (
  <>
    <Marker 
      coordinate={selectedLocation} 
      title={selectedLocation.name} 
      pinColor={colors.darkGreen} // marker rangini o'zgartirish
    />
    {getLevelPolygon() && (
      <Polygon
        coordinates={getLevelPolygon()!} 
        strokeColor={colors.darkGreen}    // chiziq rangi
        strokeWidth={1}                   // qalinroq chiziq
        fillColor="rgba(13, 119, 94, 0.2)" // shaffofroq fill
        lineJoin="round"                  // chiziqlarni yumaloqlash
        lineCap="round"                   // burchaklarni yumaloqlash
      />
    )}
  </>
)}


            </AnyMapView>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>My neighborhoods</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {renderLocationButton(0)}
              {renderLocationButton(1)}
            </View>
          </View>

          <View style={$trigger}>
            <Pressable
              onPress={() => setBoundaryLevel(p => Math.max(MIN_LEVEL, p - 1))}
              disabled={boundaryLevel === MIN_LEVEL}
              style={[styles.stepperButton, boundaryLevel === MIN_LEVEL && styles.disabledButton]}
            >
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <View style={styles.radiusDisplayBox}>
              <Text style={styles.radiusText}>{getLevelName(boundaryLevel)}</Text>
            </View>
            <Pressable
              onPress={() => setBoundaryLevel(p => Math.min(MAX_LEVEL, p + 1))}
              disabled={boundaryLevel === MAX_LEVEL}
              style={[styles.stepperButton, boundaryLevel === MAX_LEVEL && styles.disabledButton]}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>

          <Button style={styles.closeBtnText} onPress={onClose}>
            <Text style={styles.closeBtnText}>Close</Text>
          </Button>
        </View>
      </View>

      <SearchNeighborhoodModal
        visible={!!activeModal}
        onClose={() => setActiveModal(null)}
        onSelectNeighborhood={handleSelect}
      />
    </Modal>
  );
};

export default NeighborhoodSettings;