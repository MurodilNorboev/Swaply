import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as sty from './styles';
import {
  LocationPicker,
  MenuComponent,
  Notification,
  Search,
} from './components';

export const HomeScreen = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={sty.MenuStyl.$topBar}>
        <LocationPicker />
        <View style={sty.MenuStyl.$topBariconWrap}>
          <Pressable onPress={() => setMenuOpen(true)}>
            <Text style={sty.MenuStyl.$menuIcon}>☰</Text>
          </Pressable>

          <Search />
          <Notification />
        </View>
      </View>

      <MenuComponent visible={menuOpen} onClose={() => setMenuOpen(false)} />
    </SafeAreaView>
  );
};
