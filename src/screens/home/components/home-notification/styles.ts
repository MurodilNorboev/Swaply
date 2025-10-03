import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const MenuStyl: any = {
  $overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', // fonni biroz qoraytirish
    zIndex: 999,
  },
  $container: {
    marginTop: 50,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  $menuText: {
    fontSize: 16,
    color: '#000',
  },
  $closeArea: {
    flex: 1,
  },
  $menuIcon: {
    fontSize: 30,
  },
};

export const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0,
    backgroundColor: '#fff',
  },
  backButton: {
    paddingRight: 15,
    paddingVertical: 5,
  },
  backIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  spacer: {
    width: 30,
  },
});

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  groupContainer: {
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  groupTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 10,
    paddingLeft: 5,
  },
  menuItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  icon: {
    fontSize: 22,
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    color: '#333',
  },
  sideMenu: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: SCREEN_WIDTH * 1.0,
    backgroundColor: '#fff',
    zIndex: 1000,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
});
