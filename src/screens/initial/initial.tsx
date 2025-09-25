import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const InitialScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>InitialScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
