import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export const STY = StyleSheet.create({
  $container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.md,
  },
  $imageWrapper: {
    height: 135,
    marginBottom: spacing.lg,
  },
  $image: {
    height: '100%',
  },
  $welcomeText: {
    fontFamily: typography.fonts.syne.Jostmedium,
    alignItems: 'center',
    fontSize: 22,
  },
  $row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  $btnLogin: {
    marginTop: spacing.lg,
    borderRadius: 60,
    width: 220,
    justifyContent: 'center',
  },
  $orText: {
    fontFamily: typography.fonts.syne.Jostregular,
    color: colors.black,
    fontSize: 16,
  },
  $textSignUp: {
    color: colors.black,
    position: 'absolute',
    bottom: 30,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: spacing.md,
  },
  $signUp: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
});
