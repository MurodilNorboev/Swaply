import { Button, Text, TextField } from '../../components';
import { AppStackParamList } from '../../navigators';
import { AuthStackParamList } from '../../navigators/auth-navigator';
import { colors, spacing, typography } from '../../theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, View } from 'react-native';
import * as sty from './styles';

export const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & AppStackParamList>) => {
  const handleNavigate = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={sty.STY.$container}>
      <View style={sty.STY.$imageWrapper}>
        <Image
          source={require('../../../assets/images/login.webp')}
          style={sty.STY.$image}
          resizeMode="contain"
        />
      </View>
      <Text style={sty.STY.$welcomeText}>
        {'Welcome Back '}
        <Text style={sty.STY.$imageStikerWrapper}>
          <Image
            source={require('../../../assets/images/stikerWelcome.png')}
            style={sty.STY.$imageStiker}
          />
        </Text>
        {'\nYou’ve been missed!'}
      </Text>

      <TextField
        label="Email"
        placeholder="Enter your email"
        HelperTextProps={{
          style: {
            color: colors.gray1,
            fontFamily: typography.fonts.syne.Jostregular,
          },
        }}
      />
      <TextField
        label="Password"
        placeholder="Enter your password"
        HelperTextProps={{
          style: {
            color: colors.gray1,
            fontFamily: typography.fonts.syne.Jostregular,
          },
        }}
      />
      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
        <Text size="xs" style={sty.STY.$forgotText}>
          Forgot password
        </Text>
      </Pressable>
      <View style={sty.STY.$row}>
        <Button
          style={[sty.STY.$btnLogin]}
          onPress={() => navigation.navigate('BottomTab')}
        >
          Sign in
        </Button>
      </View>
      <View style={sty.STY.$lineWrapper}>
        <View style={sty.STY.$line} />
        <Text style={sty.STY.$orText}>Or continue with</Text>
        <View style={sty.STY.$line} />
      </View>

      <View style={sty.STY.$iconWrap}>
        <View style={sty.STY.$iconView}>
          <Image
            source={require('../../../assets/images/google.png')}
            style={sty.STY.$logoicon}
          />
        </View>
        <View style={sty.STY.$iconView}>
          <Image
            source={require('../../../assets/images/apple.png')}
            style={sty.STY.$logoicon}
          />
        </View>
      </View>

      <View
        style={[
          sty.STY.$textSignUp,
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Text preset="secondaryText">Not a member? </Text>
        <Pressable onPress={handleNavigate}>
          <Text style={sty.STY.$signUp}>Create an account</Text>
        </Pressable>
      </View>
    </View>
  );
};
