import {ViewStyle} from 'react-native';
import {colors} from './colors';

export const $shadow: ViewStyle = {
  elevation: 3,
  shadowRadius: 5,

  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowColor: colors.black,
};
