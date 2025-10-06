export const palette = {
  darkGreen: '#06342A',
  lightGreen: '#0D775E',
  lightGreenShade: '#D5F3EC',
  gold: '#E1AA72',
  brown: '#9D6733',
  white: '#FFFFFE',
  red: '#E52C42',
  black: '#0E0F0F',
  gray1: '#7A7E80',
  gray2: '#B4B6B8',
  gray3: '#6E767B',
  gray4: '#F1F1F1',
  primary: '#FF6600',
  commonBorder2: '#aaa',
  textDim: '#fff',
};

export const colors = {
  brownButton: palette.brown,
  defaultButton: palette.lightGreen,
  welcomeBackground: palette.darkGreen,
  defaultScreenBackground: palette.gray4,
  text: palette.black,
  placeholder: palette.gray2,
  error: palette.red,
  tabBarFocused: palette.black,
  tabBarUnfocused: palette.gray1,
  commonBorder: palette.gray3,

  appPrimary: palette.primary,
  secondaryBorder: palette.commonBorder2,
  dimmedText: palette.textDim,

  ...palette,
};
