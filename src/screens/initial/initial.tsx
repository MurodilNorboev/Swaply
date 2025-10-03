import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';
import { AppStackParamList } from '../../navigators';

export const InitialScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  useEffect(() => {
    const token = true;
    if (token) {
      navigation.replace('BottomTab');
    } else {
      navigation.replace('Auth');
    }
  }, []);
  return (
    <View style={$container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
