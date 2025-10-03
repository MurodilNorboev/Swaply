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
  $socialWrapper: {},
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
  $forgotText: {
    color: colors.black,
    fontFamily: typography.fonts.syne.Jostregular,
    fontSize: 15,
  },
  $btnLogin: {
    marginTop: spacing.lg,
    borderRadius: 60,
    width: 220,
    justifyContent: 'center',
  },
  $lineWrapper: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  $orText: {
    fontFamily: typography.fonts.syne.Jostregular,
    color: colors.black,
    fontSize: 16,
  },
  $line: {
    width: 100,
    borderColor: colors.black,
    borderWidth: 0.8,
    height: 1,
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

  $iconWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    gap: 10,
  },
  $iconView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
  },
  $logoicon: {
    width: '100%',
    height: '100%',
  },
  $checkboxWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
    gap: 10,
    marginTop: 10,
  },
});
