import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import { LocationType, Props } from './types';
import { $trigger, styles } from './styles';
import SearchNeighborhoodModal from './SearchNeighborhood';
import { Button } from '../../../../components';
import { colors } from '../../../../theme';

const MIN_LEVEL = 1;
const MAX_LEVEL = 3;
const AnyMapView = MapView as any;

const RADIUS_CONFIG = {
  1: { name: '5 km', meters: 5000, delta: 0.1 },
  2: { name: '10 km', meters: 10000, delta: 0.2 },
  3: { name: '15 km', meters: 15000, delta: 0.3 },
};

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
  const [locations, setLocations] = useState<(LocationType | null)[]>(
    initialLocations ?? [null, null]
  );
  const [selectedLocation, setSelectedLocation] = useState<
    typeof location | null
  >(null);
  const [activeModal, setActiveModal] = useState<1 | 2 | null>(null);


  // Yordamchi funksiyalar
  const getShortName = (name: string | undefined | null) =>
    name ? name.split(',')[0].split(' ')[0].trim() : null;

  // Modal
  const handleSelect = (
    name: string,
    lat: number,
    lon: number,
    boundingBox?: any[],
  ) => {

    const id = `${name}_${lat}_${lon}`.replace(/\s+/g, '_').toLowerCase();
  
    const newLoc = {
      id,
      name,
      latitude: lat,
      longitude: lon,
      boundingBox: boundingBox ?? null,
      radius: getConfig(boundaryLevel).meters,
    };
  
    const index = (activeModal! - 1) as 0 | 1;
    const newLocations = [...locations];
    newLocations[index] = newLoc;
  
    setLocations(newLocations);
    setSelectedLocation(newLoc);
    onSelectedLocationChange?.(newLoc);
    setActiveModal(null);
    setBoundaryLevel(MIN_LEVEL);
  
    if (onLocationsChange) {
      onLocationsChange(newLocations);
    }
  };

  // Clear Location
  const clearLocation = (index: 0 | 1) => {
    const newLocations = [...locations];
    newLocations[index] = null;
    setLocations(newLocations);
    if (selectedLocation === locations[index]) {
      setSelectedLocation(null);
    }
    if (onLocationsChange) {
      onLocationsChange(newLocations);
    }
  };

  // Map animation
  const getConfig = (level: number) =>
    RADIUS_CONFIG[level as keyof typeof RADIUS_CONFIG] || RADIUS_CONFIG[1];
  const animateTo = (lat: number, lng: number, level: number) => {
    const { delta } = getConfig(level);
    mapRef.current?.animateToRegion(
      {
        latitude: lat,
        longitude: lng,
        latitudeDelta: delta,
        longitudeDelta: delta,
      },
      300,
    );
  };

  useEffect(() => {
    if (!mapRef.current || !visible) return;

    const loc = selectedLocation || location;
    const level = selectedLocation ? boundaryLevel : MIN_LEVEL;
    const lat = loc?.latitude || 41.3775;
    const lng = loc?.longitude || 64.5853;
    animateTo(lat, lng, level);
  }, [visible, location, selectedLocation, boundaryLevel]);

  useEffect(() => {
    if (location && !locations[0]) {
      const initial = { ...location, name: location.name || 'Current' };
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
      // Agar tanlangan manzil ro'yxatdan tashqari bo'lsa, tozalash
      const isSelectedValid = initialLocations.some(
        loc => loc && selectedLocation && loc.name === selectedLocation.name
      );
      if (!isSelectedValid) {
        setSelectedLocation(null);
      }
    }
  }, [initialLocations]);

  // Render
  const renderLocationButton = (index: 0 | 1) => {
    const loc = locations[index];
    return (
      <Pressable
        key={index}
        style={styles.addBtn}
        onPress={() => {
          if (loc) {
            onSelectedLocationChange?.(null); 
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
                onSelectedLocationChange?.(null); 
                e.stopPropagation();
                clearLocation(index);
              }}
            >
              <Text style={styles.buttonText}>✕</Text>
            </Pressable>
          )}
        </View>
      </Pressable>
    );
  };

  // Map
  const currentRegion = selectedLocation
    ? {
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
        latitudeDelta: getConfig(MIN_LEVEL).delta,
        longitudeDelta: getConfig(MIN_LEVEL).delta,
      }
    : location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: getConfig(MIN_LEVEL).delta,
        longitudeDelta: getConfig(MIN_LEVEL).delta,
      }
    : {
        latitude: 41.3775,
        longitude: 64.5853,
        latitudeDelta: 7.0,
        longitudeDelta: 7.0,
      };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <View style={styles.title}>
            <Text style={styles.title}>Manage neighborhood</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.buttonText}>X</Text>
            </Pressable>
          </View>

          {/* Map */}
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
              {selectedLocation && (
                <>
                  <Marker
                    coordinate={selectedLocation}
                    title={selectedLocation.name}
                  />
                  {selectedLocation.boundingBox &&
                  boundaryLevel === MAX_LEVEL ? (
                    <MapView.Polygon
                      coordinates={colors.lightGreen}
                      strokeColor={colors.darkGreen}
                      fillColor="rgba(13, 119, 94, 0.159)"
                      strokeWidth={3}
                    />
                  ) : (
                    <Circle
                      center={selectedLocation}
                      radius={getConfig(boundaryLevel).meters}
                      strokeColor={colors.lightGreen}
                      fillColor="rgba(13, 119, 94, 0.159)"
                      strokeWidth={3}
                    />
                  )}
                </>
              )}
            </AnyMapView>
          </View>

          {/* Locations */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>My neighborhoods</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              {renderLocationButton(0)}
              {renderLocationButton(1)}
            </View>
          </View>

          {/* Stepper */}
          <View style={$trigger}>
            <Pressable
              onPress={() => setBoundaryLevel(p => Math.max(MIN_LEVEL, p - 1))}
              disabled={boundaryLevel === MIN_LEVEL}
              style={[
                styles.stepperButton,
                boundaryLevel === MIN_LEVEL && styles.disabledButton,
              ]}
            >
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <View style={styles.radiusDisplayBox}>
              <Text style={styles.radiusText}>
                {getConfig(boundaryLevel).name}
              </Text>
            </View>
            <Pressable
              onPress={() => setBoundaryLevel(p => Math.min(MAX_LEVEL, p + 1))}
              disabled={boundaryLevel === MAX_LEVEL}
              style={[
                styles.stepperButton,
                boundaryLevel === MAX_LEVEL && styles.disabledButton,
              ]}
            >
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>

          <Button
  style={styles.closeBtnText}
  onPress={() => {
    onClose();
  }}
>
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
