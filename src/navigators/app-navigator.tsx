import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';
import { TabNavigator } from './tab-navigator';
import { AuthNavigator } from './auth-navigator';

export type AppStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Onboarding: undefined;
  BottomTab: undefined;
  Login?: undefined;
  Location: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Splash" component={Screens.SplashScreen} />
      <Stack.Screen name="Auth" component={AuthNavigator} /> */}
      <Stack.Screen name="BottomTab" component={TabNavigator} />
      <Stack.Screen name="Location" component={Screens.LocationScreen} />
    </Stack.Navigator>
  );
};
