import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors, spacing } from '../../../../theme';
const { height, width } = Dimensions.get('window');

export const $trigger: ViewStyle = {
  borderWidth: 1,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  borderColor: colors.commonBorder,
  borderRadius: spacing.xs,
  padding: spacing.xs,
  backgroundColor: '#333',
};
export const $label: TextStyle = {
  color: colors.textDim,
  marginBottom: spacing.sm,
  fontWeight: '600',
};

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'flex-end',
  } as ViewStyle,
  sheet: {
    height: height * 0.93,
    padding: 16,
  } as ViewStyle,
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as TextStyle,
  mapBox: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  } as ViewStyle,
  card: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  } as ViewStyle,
  cardTitle: { color: '#aaa', marginBottom: 4 } as TextStyle,
  neighborhood: { color: '#fff', fontSize: 16 } as TextStyle,
  // Stepper Style'lari
  stepperButton: {
    backgroundColor: colors.primary,
    width: 35,
    height: 35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  disabledButton: { opacity: 0.5 } as ViewStyle,
  buttonText: { color: '#fff', fontSize: 22, lineHeight: 28 } as TextStyle,
  radiusDisplayBox: { alignItems: 'center' } as ViewStyle,
  radiusText: { color: '#fff', fontSize: 20, fontWeight: 'bold' } as TextStyle,
  minMaxText: { color: '#aaa', fontSize: 10 } as TextStyle,
  // Umumiy tugma
  closeBtn: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  } as ViewStyle,
  closeBtnText: { color: '#fff', fontSize: 16 } as TextStyle,
});
