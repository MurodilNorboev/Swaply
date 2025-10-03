import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  StatusBar,
} from 'react-native';
import { AppStackParamList } from '../../navigators';

export const SplashScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  useEffect(() => {
    const token = false;
    const timer = setTimeout(() => {
      if (token) {
        navigation.replace('BottomTab');
      } else {
        navigation.replace('Auth');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require('../../../assets/images/SplashScreen.png')}
        style={styles.image}
        resizeMode="cover"
      >
        <Text style={styles.version}>VERSION 1.0</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  version: {
    marginBottom: 20,
    color: 'white',
    fontSize: 12,
  },
});
