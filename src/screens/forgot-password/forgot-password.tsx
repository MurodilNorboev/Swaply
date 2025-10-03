import { Button, Text, TextField } from '../../components';
import { AuthStackParamList } from '../../navigators/auth-navigator';
import { colors, spacing, typography } from '../../theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ImageStyle, Pressable, View, ViewStyle } from 'react-native';
import * as sty from './styles';

export const ForgotPasswordScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const handleNavigate = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={sty.$container}>
      <View style={sty.$imageWrapper}>
        <Image
          source={require('../../../assets/images/login.webp')}
          style={sty.$image}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          textAlign: 'left',
          fontFamily: typography.fonts.syne.Jostmedium,
        }}
        size="xl"
        weight="bold"
      >
        Forgot Password
      </Text>
      <Text
        style={{
          marginBottom: spacing.md,
          fontFamily: typography.fonts.syne.Jostregular,
        }}
      >
        Enter The Email Associated With Your Account And We’ll Send And Email To
        Reset Your Password
      </Text>
      <View
        style={{
          gap: spacing.md,
        }}
      >
        <TextField
          label="Email Address"
          HelperTextProps={{ style: { color: colors.gray1 } }}
        />
      </View>

      <View style={sty.$row}>
        <Button
          style={sty.$btnLogin}
          onPress={() => navigation.navigate('OtpVerification')}
        >
          Send Mail
        </Button>
      </View>

      <View
        style={[
          sty.$textSignUp,
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Text preset="secondaryText">Back To </Text>
        <Pressable onPress={handleNavigate}>
          <Text style={sty.$signUp}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};
