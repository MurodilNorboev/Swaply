import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Modal,
  ScrollView,
  LayoutRectangle,
} from 'react-native';
import NeighborhoodSettings from './NeighborhoodSettings';
import { LocationType } from './types';
import { colors, typography } from '../../../../theme';
import { useWindowDimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const LocationPicker = () => {
  const { width: windowWidth } = useWindowDimensions();
  const [locations, setLocations] = useState<LocationType[]>([null, null]);
  const [selectedLocation, setSelectedLocation] = useState<LocationType>(null);
  const [open, setOpen] = useState(false);
  const [buttonLayout, setButtonLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: windowWidth * 0.35,
    height: 48,
  });

  const [showNeighborhood, setShowNeighborhood] = useState(false);

  const getShortName = (name: string | undefined | null) =>
    name ? name.split(',')[0].split(' ')[0].trim() : 'My Location';

  const getDisplayText = () => {
    if (selectedLocation) {
      return getShortName(selectedLocation.name);
    }
    if (validLocations.length === 1) {
      return getShortName(validLocations[0]?.name);
    }
    return 'My Location';
  };

  const validLocations = locations.filter(loc => loc !== null);

  const handlePress = () => {
    if (validLocations.length <= 1) {
      setShowNeighborhood(true);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const valid = locations.filter(loc => loc !== null);
    if (valid.length === 0) {
      setSelectedLocation(null);
    } else if (valid.length === 1) {
      setSelectedLocation(valid[0]);
    } else {
      if (selectedLocation && !valid.includes(selectedLocation)) {
        setSelectedLocation(null);
      }
    }
  }, [locations, selectedLocation]);

  return (
    <View>
      <Pressable
        style={[styles.$selectBox, { width: windowWidth * 0.35 }]}
        onLayout={e => setButtonLayout(e.nativeEvent.layout)}
        onPress={handlePress}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.$dropdownText}
        >
          {getDisplayText()}
        </Text>
      </Pressable>

      {/* Dropdown Modal */}
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
                    setSelectedLocation(loc);
                    setOpen(false);
                  }}
                >
                  <Text>{getShortName(loc.name)}</Text>
                </Pressable>
              ))}

              <Pressable
                style={[
                  styles.$option,
                  {
                    borderTopWidth: validLocations.length > 0 ? 1 : 0,
                    borderTopColor: '#eee',
                  },
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

      {/* Neighborhood Settings Modal */}
      <NeighborhoodSettings
        visible={showNeighborhood}
        onClose={() => setShowNeighborhood(false)}
        location={null}
        onLocationsChange={setLocations}
        onSelectedLocationChange={setSelectedLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  $selectBox: {
    width: width * 0.35,
  },
  $dropdownText: {
    color: colors.darkGreen,
    fontFamily: typography.fonts.syne.JostsemiBold,
    fontSize: 20,
  },
  $backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
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
