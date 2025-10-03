import { Button, Text, TextField } from '../../components';
import { AppStackParamList } from '../../navigators';
import { AuthStackParamList } from '../../navigators/auth-navigator';
import { colors, spacing, typography } from '../../theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, View } from 'react-native';
import * as sty from './styles';
import React, { useState } from 'react';

export const NewPasswordScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & AppStackParamList>) => {
  const handleNavigate = () => {
    navigation.navigate('Login');
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
      <Text style={sty.STY.$welcomeText}>Enter New Password</Text>
      <Text
        style={{
          marginBottom: spacing.md,
          fontFamily: typography.fonts.syne.Jostregular,
        }}
      >
        OTP has been sent to your email. It will automatically fill the input
        box
      </Text>

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

      <View style={sty.STY.$row}>
        <Button
          style={[sty.STY.$btnLogin]}
          onPress={() => navigation.navigate('BottomTab')}
        >
          Continue
        </Button>
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
        <Text preset="secondaryText">Back To </Text>
        <Pressable onPress={handleNavigate}>
          <Text style={sty.STY.$signUp}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};
