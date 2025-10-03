import { Button, Text } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Image,
  ImageStyle,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { AuthStackParamList } from '../../navigators/auth-navigator';
import { $row } from '../forgot-password/styles';

export const OtpVerificationScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const handleNavigate = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={$container}>
      <View style={$imageWrapper}>
        <Image
          source={require('../../../assets/images/login.webp')}
          style={$image}
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
        fontFamily="syne"
      >
        OTP Verification
      </Text>
      <Text
        style={{
          marginBottom: spacing.md,
          fontFamily: typography.fonts.syne.Jostregular,
        }}
      >
        OTP has been sent to your email. It will automatically fill the input
        box
      </Text>
      <OtpInput
        numberOfDigits={4}
        focusColor="green"
        autoFocus={false}
        hideStick={true}
        placeholder="****"
        blurOnFilled={true}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onFocus={() => console.log('Focused')}
        onBlur={() => console.log('Blurred')}
        onTextChange={text => console.log(text)}
        onFilled={text => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        theme={{
          containerStyle: {
            maxWidth: 250,
            marginHorizontal: 'auto',
            marginBottom: spacing.lg,
          },
          // pinCodeContainerStyle: styles.pinCodeContainer,
          // pinCodeTextStyle: styles.pinCodeText,
          // focusStickStyle: styles.focusStick,
          // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          // placeholderTextStyle: styles.placeholderText,
          // filledPinCodeContainerStyle: styles.filledPinCodeContainer,
          // disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
        }}
      />
      <Text style={{ textAlign: 'center' }}>03:00</Text>
      <Pressable onPress={handleNavigate}>
        <Text style={{ color: colors.lightGreen, textAlign: 'center' }}>
          Resend code
        </Text>
      </Pressable>
      <View style={$row}>
        <Button
          style={$btnLogin}
          onPress={() => navigation.navigate('NewPassword')}
        >
          Verify and proceed
        </Button>
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  padding: spacing.md,
};
const $imageWrapper: ViewStyle = {
  height: 140,
  marginBottom: spacing.lg,
};
const $image: ImageStyle = {
  height: '100%',
  // width: 120,
};
const $btnLogin: ViewStyle = {
  marginTop: spacing.lg,
  borderRadius: 60,
  width: 220,
  justifyContent: 'center',
};
