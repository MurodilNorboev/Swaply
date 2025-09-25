import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeIcon } from '../icons/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';
import { TabNavigator } from './tab-navigator';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Initial" component={Screens.InitialScreen} /> */}
      {/* <Stack.Screen name="Splash" component={Screens.SplashScreen} /> */}
      <Stack.Screen name="BottomTab" component={TabNavigator} />
    </Stack.Navigator>
  );
};
