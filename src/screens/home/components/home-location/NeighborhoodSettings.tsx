// NeighborhoodSettings.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, { Marker, Polygon, Region } from 'react-native-maps';
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
  getLocationsByProvince,
} from '../../../../utils/';
import { USE_MOCK_LOCATION, MOCK_LOCATION } from '../../../../config';

/** Helper: haversine distance (meters) */
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371e3;
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
  const mapRef = useRef<MapView | null>(null);
  const [boundaryLevel, setBoundaryLevel] = useState<number>(MIN_LEVEL);
  const [locations, setLocations] = useState<(LocationType | null)[]>(
    initialLocations ?? [null, null],
  );
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null,
  );
  const [activeModal, setActiveModal] = useState<1 | 2 | null>(null);
  const [nearbyLocations, setNearbyLocations] = useState<LocationType[]>([]);
  const [polygonCoords, setPolygonCoords] = useState<
    { latitude: number; longitude: number }[] | null
  >(null);
  const [loadingNearby, setLoadingNearby] = useState(false);

  // Create bbox from center + radius (meters)
  function createBBoxFromCenter(
    lat: number,
    lon: number,
    radiusMeters: number,
  ) {
    const latDelta = radiusMeters / 111320; // approx
    const lonDelta = radiusMeters / (111320 * Math.cos((lat * Math.PI) / 180));
    return {
      south: lat - latDelta,
      north: lat + latDelta,
      west: lon - lonDelta,
      east: lon + lonDelta,
    };
  }

  // Map region selection by level
  const getLevelRegion = (level: number): Region => {
    if (!selectedLocation) {
      return {
        latitude: MOCK_LOCATION.latitude,
        longitude: MOCK_LOCATION.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
    }

    const lat = selectedLocation.latitude;
    const lon = selectedLocation.longitude;

    if (level === 1) {
      return {
        latitude: lat,
        longitude: lon,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
    }

    if (level === 2) {
      // Level 1 markazidan 15 km radius
      const R = 6371e3; // yer radiusi
      const latDelta = (15_000 / R) * (180 / Math.PI); // 15 km -> gradus
      const lonDelta =
        (15_000 / (R * Math.cos((lat * Math.PI) / 180))) * (180 / Math.PI);

      return {
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta * 2, // bounding box, shuning uchun *2
        longitudeDelta: lonDelta * 2,
      };
    }

    // Level 3 (wide)
    const bbox = createBBoxFromCenter(lat, lon, 50000); // 50 km
    return {
      latitude: (bbox.north + bbox.south) / 2,
      longitude: (bbox.east + bbox.west) / 2,
      latitudeDelta: bbox.north - bbox.south,
      longitudeDelta: bbox.east - bbox.west,
    };
  };

  // Get polygon for selectedLocation depending on level
  const computeLevelPolygon = async (): Promise<
  { latitude: number; longitude: number }[] | null
> => {
  if (!selectedLocation) return null;

  if (boundaryLevel === 1) {
    if ((selectedLocation.polygonPoints?.length ?? 0) > 3)
      return selectedLocation.polygonPoints!;
    if ((selectedLocation.boundingBox?.length ?? 0) >= 4) {
      const lats = selectedLocation.boundingBox!.map(p => p.latitude);
      const lons = selectedLocation.boundingBox!.map(p => p.longitude);
      return bboxToPolygon({
        south: Math.min(...lats),
        north: Math.max(...lats),
        west: Math.min(...lons),
        east: Math.max(...lons),
      });
    }
    return bboxToPolygon(
      createBBoxFromCenter(selectedLocation.latitude, selectedLocation.longitude, 500),
    );
  }

  if (boundaryLevel === 2) {
    return bboxToPolygon(
      createBBoxFromCenter(selectedLocation.latitude, selectedLocation.longitude, 15000),
    );
  }

  if (boundaryLevel === 3) {
    try {
      // 🔹 selectedLocation.name ichidan viloyat nomini olish
      const parts = selectedLocation.name.split(',').map(p => p.trim());
      const provName =
        parts.length > 1
          ? parts[parts.length - 2] // 2-oxirgi qism viloyat nomi
          : parts[0];
  
      console.log("🧭 Viloyat polygon qidirilmoqda:", provName);
  
      // 🔹 So‘rov yuborish
      const osmResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          provName + " province"
        )}&polygon_geojson=1&addressdetails=1`
      );
      console.log("🌐 So‘rov yuborilayapti:", osmResponse.url);
      const osmData = await osmResponse.json();
      console.log("📥 Javob holati:", osmResponse.status);
  
      const extractCoords = (geojson: any) => {
        if (!geojson) return [];
        if (geojson.type === "Polygon")
          return geojson.coordinates[0].map(([lon, lat]: [number, number]) => ({
            latitude: lat,
            longitude: lon,
          }));
        if (geojson.type === "MultiPolygon")
          return geojson.coordinates[0][0].map(([lon, lat]: [number, number]) => ({
            latitude: lat,
            longitude: lon,
          }));
        return [];
      };
  
      let first = osmData[0];
      if (!first) {
        console.warn("⚠️ Hech qanday natija topilmadi. Fallback ishlayapti...");
        const fallbackName = provName.split(" ")[0];
        const fallbackResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            fallbackName + " province"
          )}&polygon_geojson=1&addressdetails=1`
        );
        console.log("🌐 Fallback so‘rov yuborilayapti:", fallbackResponse.url);
        const fallbackData = await fallbackResponse.json();
        console.log("📥 Fallback javob holati:", fallbackResponse.status);
        first = fallbackData[0];
      }
  
      if (first) {
        const coords = extractCoords(first.geojson);
        if (coords.length > 3) {
          console.log("🗺️ OSM polygon nuqtalari:", coords.length);
          return coords;
        }
      }
  
      console.warn("⚠️ Viloyat uchun polygon topilmadi:", provName);
      return null;
    } catch (err) {
      console.error("❌ Province polygon fetch error:", err);
      return null;
    }
  }
  
  
  
  

  return null;
};


  // On mount: get current location (mock or real) and fetch nearby locations
  useEffect(() => {
    let mounted = true;
    (async () => {
      const coords = await getCurrentLocation();
      if (!coords || !mounted) return;

      const userLoc: LocationType = {
        id: 'current_location',
        name: 'Current Location',
        latitude: coords.latitude,
        longitude: coords.longitude,
      };

      setLocations(prev => {
        const copy = [...prev];
        copy[0] = userLoc;
        return copy;
      });
      setSelectedLocation(userLoc);
      onSelectedLocationChange?.(userLoc);

      // Fetch nearby relevant places using a few keywords and dedupe
      setLoadingNearby(true);
      try {
        const keywords = [
          'mahalla',
          'qishloq',
          'village',
          'suburb',
          'town',
          'district',
        ];
        let all: FormattedLocation[] = [];
        for (const k of keywords) {
          // ask OSM about keyword near coords
          // Using a "near" pattern in query so OSM returns closer results - your searchOSM will accept this text
          // e.g. "mahalla near 40.79,72.36"
          const res = await searchOSM(
            `${k} near ${coords.latitude},${coords.longitude}`,
          );
          all = all.concat(res);
        }
        // dedupe by id
        const map = new Map<string, FormattedLocation>();
        for (const item of all) map.set(item.id, item);
        const unique = Array.from(map.values());

        // filter by distance threshold (e.g., 20 km)
        const nearby = unique
          .filter(
            u =>
              getDistance(coords.latitude, coords.longitude, u.lat, u.lon) <=
              20000,
          )
          .map(u => ({
            id: u.id,
            name: u.name,
            latitude: u.lat,
            longitude: u.lon,
            boundingBox: u.boundingBox,
            polygonPoints: u.polygonPoints,
          }));

        setNearbyLocations(nearby);
      } catch (err) {
        console.warn('Nearby fetch failed:', err);
      } finally {
        setLoadingNearby(false);
      }
    })();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recompute polygonCoords when selectedLocation or boundaryLevel changes
  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!selectedLocation) {
        setPolygonCoords(null);
        return;
      }
      const poly = await computeLevelPolygon();
      if (!mounted) return;
      setPolygonCoords(poly);
    })();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation, boundaryLevel]);

  // Animate map to region when selectedLocation or boundaryLevel changes
  useEffect(() => {
    const region = getLevelRegion(boundaryLevel);
    if (
      mapRef.current &&
      typeof mapRef.current.animateToRegion === 'function'
    ) {
      try {
        mapRef.current.animateToRegion(region, 300);
      } catch (e) {
        /* ignore if animateToRegion not available */
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation, boundaryLevel]);

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
      boundingBox,
      polygonPoints,
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
    if (
      selectedLocation &&
      locations[index] &&
      selectedLocation.id === locations[index]?.id
    ) {
      setSelectedLocation(null);
    }
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

  const DEFAULT_REGION: Region = USE_MOCK_LOCATION
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
              ref={(r: MapView | null) => (mapRef.current = r)}
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
              {/* USER marker - sariq (yellow) */}
              {locations[0] && (
                <Marker
                  coordinate={{
                    latitude: locations[0].latitude,
                    longitude: locations[0].longitude,
                  }}
                  title="Sizning joylashuvingiz"
                  pinColor="yellow"
                />
              )}

              {/* Selected location polygon (green) */}
              {selectedLocation && polygonCoords?.length ? (
                <Polygon
                  coordinates={polygonCoords}
                  strokeColor={colors.darkGreen}
                  strokeWidth={1}
                  fillColor="rgba(13,119,94,0.18)"
                />
              ) : null}

              {/* Nearby places polygons (orange) */}
              {nearbyLocations.map((loc: any, i) =>
                loc.polygonPoints && loc.polygonPoints.length ? (
                  <Polygon
                    key={`nearby-poly-${i}`}
                    coordinates={loc.polygonPoints}
                    strokeColor="rgba(255,165,0,0.6)"
                    fillColor="rgba(255,165,0,0.15)"
                    strokeWidth={1}
                  />
                ) : null,
              )}

              {/* nearby markers (small orange pins) */}
              {nearbyLocations.map((loc: any, i) => (
                <Marker
                  key={`nearby-${i}`}
                  coordinate={{
                    latitude: loc.latitude,
                    longitude: loc.longitude,
                  }}
                  title={loc.name}
                  pinColor="orange"
                />
              ))}
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
