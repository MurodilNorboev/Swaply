import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { LocationType, Props } from './types';
import { $trigger, styles } from './styles';
import SearchNeighborhoodModal from './SearchNeighborhood';
import { Button } from '../../../../components';
import { colors } from '../../../../theme';
import {
  expandBoundingBox,
  bboxToPolygon,
  searchOSM,
  FormattedLocation,
  getUzbekRegionPolygon,
  getLocationsByProvince,
} from '../../../../utils/';
import { USE_MOCK_LOCATION, MOCK_LOCATION } from '../../../../config';

// Distance function
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = 6371e3; // meters
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);
  const a =
    Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

async function requestLocationPermission() {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
}

export async function getCurrentLocation() {
  if (USE_MOCK_LOCATION) return MOCK_LOCATION;

  const hasPermission = await requestLocationPermission();
  if (!hasPermission) return null;

  return new Promise<{ latitude: number; longitude: number }>(
    (resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => resolve(position.coords),
        error => reject(error),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    },
  );
}

const MIN_LEVEL = 1;
const MAX_LEVEL = 3;
const AnyMapView = MapView as any;

const NeighborhoodSettings = ({
  visible,
  onClose,
  location,
  onLocationsChange,
  onSelectedLocationChange,
  initialLocations,
}: Props) => {
  const mapRef = useRef<MapView>(null);
  const [boundaryLevel, setBoundaryLevel] = useState(MIN_LEVEL);
  const [locations, setLocations] = useState<(LocationType | null)[]>(
    initialLocations ?? [null, null],
  );
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null,
  );
  const [activeModal, setActiveModal] = useState<1 | 2 | null>(null);
  const [nearbyLocations, setNearbyLocations] = useState<LocationType[]>([]);
  const [polygonCoords, setPolygonCoords] = useState<{ latitude: number; longitude: number }[] | null>(null);

  // 📍 Foydalanuvchi location va atrofdagi mahallalarni olish
  useEffect(() => {
    (async () => {
      const coords = await getCurrentLocation();
      if (!coords) return;

      const userLoc: LocationType = {
        id: 'current_location',
        name: 'Current Location',
        latitude: coords.latitude,
        longitude: coords.longitude,
      };
      setLocations([userLoc, null]);
      setSelectedLocation(userLoc);
      onSelectedLocationChange?.(userLoc);

      // Kalit so'zlar
      const keywords = [
        'mahalla',
        'qishloq',
        'tuman',
        'shahar',
        'village',
        'town',
        'district',
        'suburb',
      ];
      let allResults: FormattedLocation[] = [];

      try {
        for (const keyword of keywords) {
          const results = await searchOSM(
            `${keyword} near ${coords.latitude},${coords.longitude}`,
          );
          allResults = [...allResults, ...results];
        }

        const uniqueResults = Array.from(
          new Map(allResults.map(item => [item.id, item])).values(),
        );

        const nearby = uniqueResults
          .filter(
            l =>
              getDistance(coords.latitude, coords.longitude, l.lat, l.lon) <=
              20000,
          )
          .map(l => ({
            id: l.id,
            name: l.name,
            latitude: l.lat,
            longitude: l.lon,
            boundingBox: l.boundingBox,
            polygonPoints: l.polygonPoints,
          }));

        setNearbyLocations(nearby);
      } catch (err) {
        console.error('Nearby locations error:', err);
      }
    })();
  }, []);

  useEffect(() => {
    const fetchPolygon = async () => {
      if (selectedLocation) {
        const result = await getLevelPolygon();
        setPolygonCoords(result);
      }
    };
    fetchPolygon();
  }, [selectedLocation, boundaryLevel]);

  useEffect(() => {
    if (!selectedLocation) return;
  
    (async () => {
      let coords: { latitude: number; longitude: number }[] | null = null;
  
      const isProvince = /viloyati|province|region/i.test(selectedLocation.name);
      const isNeighborhood = /mahalla|suburb|district|village|town/i.test(selectedLocation.name);
  
      const buildBboxPolygon = (bboxPoints?: { latitude: number; longitude: number }[]) => {
        if (!bboxPoints || !bboxPoints.length) return null;
        const lats = bboxPoints.map(p => p.latitude);
        const lons = bboxPoints.map(p => p.longitude);
        return bboxToPolygon({
          south: Math.min(...lats),
          north: Math.max(...lats),
          west: Math.min(...lons),
          east: Math.max(...lons),
        });
      };
  
      if (isProvince) {
        // 🟩 Agar viloyat bo‘lsa:
        if (boundaryLevel === 3) {
          coords = selectedLocation.polygonPoints || null; // faqat 3-daraja
        } else {
          const result = await searchOSM(selectedLocation.name);
          if (result.length > 0) {
            coords =
              result[0].polygonPoints ||
              buildBboxPolygon(result[0].boundingBox) ||
              null;
          }
        }
      } else if (isNeighborhood) {
        // 🟦 Agar mahalla yoki tuman bo‘lsa:
        if (boundaryLevel === 1) {
          coords = selectedLocation.polygonPoints || null; // faqat 1-daraja
        } else {
          const result = await searchOSM(selectedLocation.name.split(',').pop() ?? '');
          if (result.length > 0) {
            coords =
              result[0].polygonPoints ||
              buildBboxPolygon(result[0].boundingBox) ||
              null;
          }
        }
      }
  
      setPolygonCoords(coords);
    })();
  }, [selectedLocation, boundaryLevel]);
  
  

  // 🔹 Region (Exact/Nearby/Wide)
  // Radius (metr) → Bbox yaratish
  function createBBoxFromCenter(
    lat: number,
    lon: number,
    radiusInMeters: number,
  ) {
    const latDelta = radiusInMeters / 111320; // ~111.32 km per degree
    const lonDelta =
      radiusInMeters / (111320 * Math.cos((lat * Math.PI) / 180));
    return {
      south: lat - latDelta,
      north: lat + latDelta,
      west: lon - lonDelta,
      east: lon + lonDelta,
    };
  }

  const getLevelRegion = (level: number) => {
    if (!selectedLocation) {
      return {
        latitude: MOCK_LOCATION.latitude,
        longitude: MOCK_LOCATION.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      };
    }

    const { latitude, longitude } = selectedLocation;

    // Level 1: Exact area — polygon yoki bounding box yoki kichik nuqta
    if (level === 1) {
      if (selectedLocation.polygonPoints?.length) {
        // Polygon asosida region — markaz va delta hisoblash
        const lats = selectedLocation.polygonPoints.map(p => p.latitude);
        const lons = selectedLocation.polygonPoints.map(p => p.longitude);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);
        const minLon = Math.min(...lons);
        const maxLon = Math.max(...lons);
        return {
          latitude: (minLat + maxLat) / 2,
          longitude: (minLon + maxLon) / 2,
          latitudeDelta: Math.max(maxLat - minLat, 0.005),
          longitudeDelta: Math.max(maxLon - minLon, 0.005),
        };
      }
      if (
        selectedLocation.boundingBox &&
        selectedLocation.boundingBox.length >= 4
      ) {
        const sw = selectedLocation.boundingBox[0];
        const ne = selectedLocation.boundingBox[2];

        if (sw && ne) {
          return {
            latitude: (sw.latitude + ne.latitude) / 2,
            longitude: (sw.longitude + ne.longitude) / 2,
            latitudeDelta: Math.max(ne.latitude - sw.latitude, 0.005),
            longitudeDelta: Math.max(ne.longitude - sw.longitude, 0.005),
          };
        }
      }

      // Agar hech narsa bo'lmasa — nuqta atrofi
      return {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
    }

    // Level 2: Nearby — 10 km radius
    if (level === 2) {
      const bbox = createBBoxFromCenter(latitude, longitude, 10_000);
      return {
        latitude: (bbox.north + bbox.south) / 2,
        longitude: (bbox.east + bbox.west) / 2,
        latitudeDelta: bbox.north - bbox.south,
        longitudeDelta: bbox.east - bbox.west,
      };
    }

    // Level 3: Wide — 50 km radius (viloyat darajasi)
    const bbox = createBBoxFromCenter(latitude, longitude, 50_000);
    return {
      latitude: (bbox.north + bbox.south) / 2,
      longitude: (bbox.east + bbox.west) / 2,
      latitudeDelta: bbox.north - bbox.south,
      longitudeDelta: bbox.east - bbox.west,
    };
  };

  const getLevelPolygon = async () => {
    if (!selectedLocation) return null;
  
    // 1️⃣ — Exact (aniq joy: mahalla yoki tuman)
    if (boundaryLevel === 1) {
      if (selectedLocation.polygonPoints?.length) {
        return selectedLocation.polygonPoints;
      }
  
      if (selectedLocation.boundingBox?.length) {
        // boundingBox arrayidan {north, south, east, west} yaratish
        const lats = selectedLocation.boundingBox.map(p => p.latitude);
        const lons = selectedLocation.boundingBox.map(p => p.longitude);
  
        const bbox = {
          south: Math.min(...lats),
          north: Math.max(...lats),
          west: Math.min(...lons),
          east: Math.max(...lons),
        };
  
        return bboxToPolygon(bbox);
      }
  
      // fallback: markazdan 500m radius
      const bbox = createBBoxFromCenter(
        selectedLocation.latitude,
        selectedLocation.longitude,
        500,
      );
      return bboxToPolygon(bbox);
    }
  
    // 2️⃣ — Nearby (10–20 km radius)
    if (boundaryLevel === 2) {
      const bbox = createBBoxFromCenter(
        selectedLocation.latitude,
        selectedLocation.longitude,
        15000,
      );
      return bboxToPolygon(bbox);
    }
  
    // 3️⃣ — Wide (viloyat yoki provinsiya)
    if (boundaryLevel === 3) {
      const province = selectedLocation.name.split(',')[0];
      try {
        const provinceData = await getLocationsByProvince(province);
        const region = provinceData.find(
          loc =>
            /viloyati|province|region/i.test(loc.name) ||
            loc.name.toLowerCase().includes(province.toLowerCase()),
        );
  
        if (region?.polygonPoints?.length) return region.polygonPoints;
        if (region?.boundingBox?.length) {
          const lats = region.boundingBox.map(p => p.latitude);
          const lons = region.boundingBox.map(p => p.longitude);
  
          const bbox = {
            south: Math.min(...lats),
            north: Math.max(...lats),
            west: Math.min(...lons),
            east: Math.max(...lons),
          };
  
          return bboxToPolygon(bbox);
        }
      } catch (err) {
        console.warn('Province polygon error:', err);
      }
    }
  
    return null;
  };
  

  // 🔹 Handle selecting neighborhood
  const handleSelect = (
    name: string,
    lat: number,
    lon: number,
    boundingBox?: { latitude: number; longitude: number }[],
    polygonPoints?: { latitude: number; longitude: number }[],
  ) => {
    if (!activeModal) return;
    const id = `${name}_${lat}_${lon}`.replace(/\s+/g, '_').toLowerCase();
    const newLoc: LocationType = {
      id,
      name,
      latitude: lat,
      longitude: lon,
      boundingBox, // undefined bo'lishi mumkin — xavfli emas
      polygonPoints, // undefined bo'lishi mumkin — xavfli emas
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

  const renderLocationButton = (index: 0 | 1) => {
    const loc = locations[index];
    return (
      <Pressable
        key={index}
        style={styles.addBtn}
        onPress={() =>
          loc
            ? (setSelectedLocation(loc),
              onSelectedLocationChange?.(loc),
              setBoundaryLevel(MIN_LEVEL))
            : setActiveModal((index + 1) as 1 | 2)
        }
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
          <Text style={styles.plus}>{loc?.name?.split(',')[0] ?? '+'}</Text>
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

  const DEFAULT_REGION = USE_MOCK_LOCATION
    ? {
        latitude: MOCK_LOCATION.latitude,
        longitude: MOCK_LOCATION.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
    : {
        latitude: 41.3775,
        longitude: 64.5853,
        latitudeDelta: 7,
        longitudeDelta: 7,
      };

  const currentRegion = selectedLocation
    ? getLevelRegion(boundaryLevel)
    : DEFAULT_REGION;

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

          <View style={styles.mapBox}>
            <AnyMapView
              ref={mapRef}
              style={{ flex: 1 }}
              initialRegion={currentRegion}
              region={currentRegion}
              showsUserLocation
              mapType="standard"
              showsPointsOfInterest
              showsBuildings
              scrollEnabled
              zoomEnabled
              pitchEnabled
              rotateEnabled
            >
              {/* Exact Area */}
             {selectedLocation && (
  <>
    <Marker
      coordinate={{
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
      }}
      title={selectedLocation.name}
      pinColor={colors.darkGreen}
    />
    {polygonCoords?.length ? (
      <Polygon
        coordinates={polygonCoords}
        strokeColor={colors.darkGreen}
        strokeWidth={1}
        fillColor="rgba(13,119,94,0.2)"
      />
    ) : null}
  </>
)}

              {nearbyLocations.map((loc, i) =>
                loc?.polygonPoints?.length ? (
                  <Polygon
                    key={`nearby-poly-${i}`}
                    coordinates={loc.polygonPoints}
                    strokeColor="rgba(255,165,0,0.5)"
                    fillColor="rgba(255,165,0,0.2)"
                    strokeWidth={1}
                  />
                ) : null,
              )}
            </AnyMapView>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>My neighborhoods</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              {renderLocationButton(0)}
              {renderLocationButton(1)}
            </View>
          </View>

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
                {boundaryLevel === 1
                  ? 'Exact area'
                  : boundaryLevel === 2
                  ? 'Nearby area'
                  : 'Wide area'}
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
