import { TextStyle, ViewStyle } from 'react-native';
import { colors } from '../theme';

export const $tabLabel: TextStyle = {
  color: colors.gold,
  backgroundColor: 'transparent',
};
export const $focused: TextStyle = {
  color: colors.gold,
};
export const $tabBar: ViewStyle = {
  backgroundColor: colors.white,
  alignItems: 'center',
  justifyContent: 'center',
  borderTopWidth: 0,
  height: 60,
};
