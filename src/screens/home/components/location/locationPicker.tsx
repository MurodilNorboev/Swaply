import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectTrigger } from '../../../../components';

export const LocationPicker = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('Location' as never)}
      >
        <Text style={styles.icon}>📍</Text>
        <Text style={styles.text}>Select Location</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  icon: {
    fontSize: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});


