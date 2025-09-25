import { HomeIcon } from '../icons/home';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { renderTabBarIcon } from './navigation.utils';
import { BagIcon, ProfileIcon } from '../icons';
import * as Screens from '../screens';
import { colors } from '../theme';

export type TabParamList = {
  Home?: undefined;
  Wishlist?: undefined;
  Cart?: undefined;
  Profile?: undefined;
  Category?: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabScrOpt: Record<keyof TabParamList, BottomTabNavigationOptions> = {
  Home: {
    tabBarIcon: ({ focused }) => renderTabBarIcon(HomeIcon, focused),
    headerShown: false,
  },
  Cart: {
    tabBarIcon: ({ focused }) => renderTabBarIcon(BagIcon, focused),
    title: 'Your cart',
  },
  Profile: {
    headerShown: false,
    tabBarIcon: ({ focused }) => renderTabBarIcon(ProfileIcon, focused),
  },
  Wishlist: {
    headerShown: false,
    tabBarIcon: ({ focused }) => renderTabBarIcon(ProfileIcon, focused),
  },
  Category: {
    headerShown: false,
    tabBarIcon: ({ focused }) => renderTabBarIcon(ProfileIcon, focused),
  },
};

export const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 75,
            paddingTop: 5,
          },
          tabBarInactiveTintColor: colors.tabBarUnfocused,
          tabBarActiveTintColor: colors.tabBarFocused,
          tabBarHideOnKeyboard: true,
          headerTitleAlign: 'center',
        }}
      >
        {Object.entries(TabScrOpt).map(([name, options]) => (
          <Tab.Screen
            key={name}
            name={name as keyof TabParamList}
            component={Screens[`${name}Screen` as keyof typeof Screens]}
            options={options}
          />
        ))}
      </Tab.Navigator>
    );
  };
