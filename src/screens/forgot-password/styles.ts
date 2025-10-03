import { ImageStyle, ViewStyle } from "react-native";
import { colors, spacing } from "../../theme";

export const $textSignUp: ViewStyle = {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    marginTop: spacing.md,
  };
  
  export const $signUp: ViewStyle = {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  };
  
  export const $container: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.md,
  };
  export const $imageWrapper: ViewStyle = {
    height: 140,
    marginBottom: spacing.lg,
  };
  export const $image: ImageStyle = {
    height: '100%',
    // width: 120,
  };
  export const $row: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.md,
  };
  export const $btnLogin: ViewStyle = {
    marginTop: spacing.lg,
    borderRadius: 60,
    width: 220,
    justifyContent: 'center',
  };