import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as components from './components';
import { View } from 'react-native';

export const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <components.TabComponent  />
    </View>
  );
};
