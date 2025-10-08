import { Dimensions, StyleSheet } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  $overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  sideMenu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
    zIndex: 1000,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  },
  menuList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  cardLabel: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
  serviceList: {
    marginBottom: 16,
    paddingLeft: 16,
  },
  serviceItem: {
    paddingVertical: 10,
  },
  serviceText: {
    fontSize: 15,
    color: '#666',
    fontWeight: '400',
    lineHeight: 22,
  },
});
