// LocationPicker.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
  LayoutRectangle,
} from 'react-native';
import NeighborhoodSettings from './NeighborhoodSettings';
import { LocationType } from './types';
import { colors, typography } from '../../../../theme';
import { useWindowDimensions } from 'react-native';

interface LocationPickerProps {
  selectedLocation?: LocationType;
  onSelectedLocationChange?: (location: LocationType | null) => void;
  locations?: (LocationType | null)[]; 
  onLocationsChange?: (locations: (LocationType | null)[]) => void;
}

export const LocationPicker = ({
  selectedLocation,
  onSelectedLocationChange,
  locations: propLocations,
  onLocationsChange,
}: LocationPickerProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const [buttonLayout, setButtonLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: windowWidth * 0.35,
    height: 48,
  });
  const [showNeighborhood, setShowNeighborhood] = useState(false);

  // ✅ XAVFSIZ: locations undefined bo'lishi mumkinligini hisobga olamiz
  const locations = Array.isArray(propLocations) ? propLocations : [null, null];
  const validLocations = locations.filter((loc): loc is LocationType => loc !== null);

  const getShortName = (name?: string | null) =>
    name ? name.split(',')[0].split(' ')[0].trim() : 'My Location';

  const displayText = selectedLocation
    ? getShortName(selectedLocation.name)
    : validLocations.length === 1
    ? getShortName(validLocations[0]?.name)
    : 'My Location';

  const handlePress = () =>
    validLocations.length <= 1
      ? setShowNeighborhood(true)
      : setOpen(true);

  return (
    <View>
      {/* Trigger Button */}
      <Pressable
        style={[styles.$selectBox, { width: windowWidth * 0.35 }]}
        onLayout={e => setButtonLayout(e.nativeEvent.layout)}
        onPress={handlePress}
      >
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.$dropdownText}>
          {displayText}
        </Text>
      </Pressable>

      {/* Dropdown */}
      <Modal visible={open} transparent animationType="fade">
        <Pressable style={styles.$backdrop} onPress={() => setOpen(false)}>
          <View
            style={[
              styles.$dropdown,
              {
                top: buttonLayout.y + buttonLayout.height + 70,
                left: buttonLayout.width / 2 - 60,
                width: buttonLayout.width,
              },
            ]}
          >
            <ScrollView>
              {validLocations.map((loc, index) => (
                <Pressable
                  key={index}
                  style={styles.$option}
                  onPress={() => {
                    onSelectedLocationChange?.(loc);
                    setOpen(false);
                  }}
                >
                  <Text>{getShortName(loc?.name)}</Text>
                </Pressable>
              ))}

              <Pressable
                style={[
                  styles.$option,
                  { borderTopWidth: validLocations.length > 0 ? 1 : 0, borderTopColor: '#eee' },
                ]}
                onPress={() => {
                  setShowNeighborhood(true);
                  setOpen(false);
                }}
              >
                <Text>Neighborhood settings</Text>
              </Pressable>
            </ScrollView>
          </View>
        </Pressable>
      </Modal>

      {/* Neighborhood Modal */}
      <NeighborhoodSettings
        visible={showNeighborhood}
        onClose={() => setShowNeighborhood(false)}
        location={null}
        onLocationsChange={onLocationsChange}
        initialLocations={locations}
        onSelectedLocationChange={onSelectedLocationChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  $selectBox: { width: 150 }, // useWindowDimensions bilan hisoblanadi
  $dropdownText: {
    color: colors.darkGreen,
    fontFamily: typography.fonts.syne.JostsemiBold,
    fontSize: 20,
  },
  $backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  $dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: 200,
  },
  $option: {
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
});