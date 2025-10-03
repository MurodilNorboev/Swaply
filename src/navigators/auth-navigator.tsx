import * as Screens from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  Welcome: undefined;
  NewPassword: undefined;
  OtpVerification: undefined;
  ForgotPassword: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'white' },
        headerShown: false,
      }}
    >
      <AuthStack.Screen
        name="Onboarding"
        component={Screens.OnboardingScreen}
      />
      <AuthStack.Screen name="Login" component={Screens.LoginScreen} />
      <AuthStack.Screen name="Register" component={Screens.RegisterScreen} />
      <AuthStack.Screen
        name="OtpVerification"
        component={Screens.OtpVerificationScreen}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={Screens.ForgotPasswordScreen}
      />
      <AuthStack.Screen
        name="NewPassword"
        component={Screens.NewPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};
