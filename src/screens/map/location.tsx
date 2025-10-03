import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MapPressEvent } from 'react-native-maps/src/MapView.types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigators/auth-navigator';
import { AppStackParamList } from '../../navigators';

const { width, height } = Dimensions.get('window');

export const LocationScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & AppStackParamList>) => {
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const handlePress = (e: MapPressEvent) => {
    setSelectedLocation(e.nativeEvent.coordinate);
  };

  const handleSave = () => {
    if (selectedLocation) {
      console.log('📍 Selected location:', selectedLocation);
      // TODO: Redux yoki Context’ga saqlash mumkin
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.5665, // Seoul default
          longitude: 126.978,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={handlePress}
      >
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Location" />
        )}
      </MapView>

      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.saveButton]}
          onPress={handleSave}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width,
    height,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#ff6f00',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
