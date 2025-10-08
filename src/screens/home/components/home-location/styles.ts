import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors, spacing, typography } from '../../../../theme';
const { height } = Dimensions.get('window');

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

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'flex-end',
  } as ViewStyle,
  sheet: {
    height: height * 0.93,
    padding: 16,

    justifyContent: 'center',
  } as ViewStyle,
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: typography.fonts.syne.Jostmedium,
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
  cardTitle: {
    color: '#aaa',
    marginBottom: 4,
    fontFamily: typography.fonts.syne.Jostmedium,
  } as TextStyle,
  // Stepper Style'lari
  stepperButton: {
    backgroundColor: colors.darkGreen,
    borderColor: colors.lightGreen,
    borderWidth: 0.5,
    width: 35,
    height: 35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  disabledButton: { opacity: 0.5 } as ViewStyle,
  buttonText: { color: '#fff', fontSize: 20, lineHeight: 28 } as TextStyle,
  radiusDisplayBox: { alignItems: 'center' } as ViewStyle,
  radiusText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: typography.fonts.syne.Jostmedium,
  } as TextStyle,
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 8,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  square: {
    borderWidth: 2,
    backgroundColor: colors.darkGreen,
    borderColor: '#0D775E',
    width: 150,
    elevation: 2, // Android soyasi
    shadowColor: '#000', // iOS soyasi
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: typography.fonts.syne.Jostmedium,
  } as TextStyle,
  // Umumiy tugma
  closeBtnText: {
    fontFamily: typography.fonts.syne.Jostmedium,
    marginTop: spacing.lg,
    borderRadius: 60,
    width: 220,
    justifyContent: 'center',
    margin: 'auto',
    marginBottom: 20,
  },
});

export const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  backButton: {
    paddingRight: 15,
    justifyContent: 'center',
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#333333',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 16,
  },
  loading: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  listTitle: {
    color: '#999',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '600',
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  listItemText: {
    color: 'white',
    fontSize: 16,
  },
  historyItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  historyItem: {
    flex: 1,
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    color: '#ff4d4d',
    fontSize: 18,
    fontWeight: 'bold',
  },
});