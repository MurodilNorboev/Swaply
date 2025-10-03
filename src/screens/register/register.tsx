import { Button, Text, TextField } from '../../components';
import { AppStackParamList } from '../../navigators';
import { AuthStackParamList } from '../../navigators/auth-navigator';
import { colors, typography } from '../../theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, View } from 'react-native';
import * as sty from './styles';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

export const RegisterScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & AppStackParamList>) => {
  const handleNavigate = () => {
    navigation.navigate('Login');
  };
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={sty.STY.$container}>
      <View style={sty.STY.$imageWrapper}>
        <Image
          source={require('../../../assets/images/login.webp')}
          style={sty.STY.$image}
          resizeMode="contain"
        />
      </View>
      <Text style={sty.STY.$welcomeText}>Create Your Account</Text>

      <TextField
        label="Name"
        HelperTextProps={{
          style: {
            color: colors.gray1,
            fontFamily: typography.fonts.syne.Jostregular,
          },
        }}
      />

      <TextField
        label="Email Address"
        HelperTextProps={{
          style: {
            color: colors.gray1,
            fontFamily: typography.fonts.syne.Jostregular,
          },
        }}
      />
      <TextField
        label="Password"
        HelperTextProps={{
          style: {
            color: colors.gray1,
            fontFamily: typography.fonts.syne.Jostregular,
          },
        }}
      />

      <View style={sty.STY.$checkboxWrap}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text size="xs" style={sty.STY.$forgotText}>
          I agree to all Term, Privacy and Fees
        </Text>
      </View>

      <View style={sty.STY.$row}>
        <Button
          style={[sty.STY.$btnLogin]}
          onPress={() => navigation.navigate('BottomTab')}
        >
          Sign Up
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
        <Text preset="secondaryText">Already have and account? </Text>
        <Pressable onPress={handleNavigate}>
          <Text style={sty.STY.$signUp}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};
