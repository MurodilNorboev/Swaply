import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import { Props } from './types';
import { $label, $trigger, styles } from './styles';

const MIN_LEVEL: number = 1;
const MAX_LEVEL: number = 3;
const STEP: number = 1;

const TASHKENT_CENTER = {
  latitude: 41.311081,
  longitude: 69.279867,
  latitudeDelta: 0.15,
  longitudeDelta: 0.15,
};

const COORDINATE_BOUNDARIES = {
  [MIN_LEVEL]: {
    name: 'Kichik Tuman (Small)',
    coords: [
      { latitude: 41.318, longitude: 69.27 },
      { latitude: 41.309, longitude: 69.27 },
      { latitude: 41.309, longitude: 69.288 },
      { latitude: 41.318, longitude: 69.288 },
      { latitude: 41.318, longitude: 69.27 },
    ],
    regionDelta: 0.05,
  },
  2: {
    name: "O'rta Tuman (Medium)",
    coords: [
      { latitude: 41.35, longitude: 69.2 },
      { latitude: 41.25, longitude: 69.2 },
      { latitude: 41.25, longitude: 69.35 },
      { latitude: 41.35, longitude: 69.35 },
      { latitude: 41.35, longitude: 69.2 },
    ],
    regionDelta: 0.2,
  },
  [MAX_LEVEL]: {
    name: 'Butun Shahar (Large)',
    coords: [
      { latitude: 41.5, longitude: 69.0 },
      { latitude: 41.1, longitude: 69.0 },
      { latitude: 41.1, longitude: 69.5 },
      { latitude: 41.5, longitude: 69.5 },
      { latitude: 41.5, longitude: 69.0 },
    ],
    regionDelta: 0.4,
  },
};

const UZBEKISTAN_REGION = {
  latitude: 41.3775,
  longitude: 69.4678,
  latitudeDelta: 7.0,
  longitudeDelta: 7.0,
};

const NeighborhoodSettings = ({ visible, onClose, location }: Props) => {
  const mapRef = useRef<MapView>(null);

  const [boundaryLevel, setBoundaryLevel] = useState<number>(MIN_LEVEL);

  const currentBoundary =
    COORDINATE_BOUNDARIES[boundaryLevel as keyof typeof COORDINATE_BOUNDARIES];

  const getRegionForBoundary = (level: number) => {
    const boundary =
      COORDINATE_BOUNDARIES[level as keyof typeof COORDINATE_BOUNDARIES];
    return {
      latitude: location?.latitude || TASHKENT_CENTER.latitude,
      longitude: location?.longitude || TASHKENT_CENTER.longitude,
      latitudeDelta: boundary.regionDelta,
      longitudeDelta: boundary.regionDelta,
    };
  };

  const animateToBoundary = (newLevel: number) => {
    const newRegion = getRegionForBoundary(newLevel);

    if (mapRef.current) {
      mapRef.current.animateToRegion(newRegion, 300);
    }
    setBoundaryLevel(newLevel);
  };

  const decreaseBoundary = () => {
    const newLevel = Math.max(MIN_LEVEL, boundaryLevel - STEP);
    animateToBoundary(newLevel);
  };

  const increaseBoundary = () => {
    const newLevel = Math.min(MAX_LEVEL, boundaryLevel + STEP);
    animateToBoundary(newLevel);
  };

  useEffect(() => {
    if (mapRef.current && visible) {
      let initialFocusRegion;

      if (location || !location) {
        initialFocusRegion = getRegionForBoundary(MIN_LEVEL);
      } else {
        initialFocusRegion = UZBEKISTAN_REGION;
      }

      mapRef.current.animateToRegion(initialFocusRegion, 0);
    }
  }, [location, visible]);

  const initialRegionProp = location
    ? getRegionForBoundary(MIN_LEVEL)
    : getRegionForBoundary(MIN_LEVEL);

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
              <Text style={styles.title}>X</Text>
            </Pressable>
          </View>

          {/* Map */}
          <View style={styles.mapBox}>
            <MapView
              ref={mapRef}
              style={StyleSheet.absoluteFill}
              initialRegion={initialRegionProp}
            >
              {/* Marker */}
              {location && (
                <Marker coordinate={location} title={location.name} />
              )}

              {/* Yumaloq Chegara */}
              <Circle
                center={{
                  latitude: location?.latitude || TASHKENT_CENTER.latitude,
                  longitude: location?.longitude || TASHKENT_CENTER.longitude,
                }}
                radius={
                  boundaryLevel === 1
                    ? 1000
                    : boundaryLevel === 2
                    ? 5000
                    : 15000
                }
                strokeColor="#0D775E"
                fillColor="rgba(13, 119, 94, 0.1)"
                strokeWidth={3}
              />
            </MapView>
          </View>

          {/* Selected neighborhood */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>My neighborhood</Text>
            <Text style={styles.neighborhood}>{location?.name}</Text>
            <View></View>
          </View>

          {/* Stepper (Darajali Tanlovchi) */}
          <View>
            <Text style={$label}>
              Chegara Darajasi ({currentBoundary.name})
            </Text>
            <View style={$trigger}>
              <Pressable
                onPress={decreaseBoundary}
                disabled={boundaryLevel === MIN_LEVEL}
                style={[
                  styles.stepperButton,
                  boundaryLevel === MIN_LEVEL && styles.disabledButton,
                ]}
              >
                <Text style={styles.buttonText}>-</Text>
              </Pressable>
              <View style={styles.radiusDisplayBox}>
                <Text style={styles.radiusText}>{currentBoundary.name}</Text>
                <Text style={styles.minMaxText}>
                  (Daraja: {boundaryLevel} / {MAX_LEVEL})
                </Text>
              </View>
              <Pressable
                onPress={increaseBoundary}
                disabled={boundaryLevel === MAX_LEVEL}
                style={[
                  styles.stepperButton,
                  boundaryLevel === MAX_LEVEL && styles.disabledButton,
                ]}
              >
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
            </View>
          </View>

          <Pressable onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeBtnText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default NeighborhoodSettings;
