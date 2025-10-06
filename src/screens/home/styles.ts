import { StyleSheet } from 'react-native';

export const MenuStyl = StyleSheet.create({
  $topBar: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  $topBariconWrap: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  $menuIcon: {
    fontSize: 45,
    color: 'black',
  },
});
