import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LocationPicker } from '../../../home/components';
import { MapComponent } from '../map';

export const TabComponent = () => {

  return (
    <View style={styles.container}>
      <MapComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});
