import { HomeIcon } from '../icons/home';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { renderTabBarIcon } from './navigation.utils';
import { BagIcon, ProfileIcon } from '../icons';
import * as Screens from '../screens';
import { colors } from '../theme';
import { Text } from 'react-native';

export type TabParamList = {
  Home?: undefined;
  Map?: undefined;
  Community?: undefined;
  Profile?: undefined;
  Chats?: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabScrOpt: Record<keyof TabParamList, BottomTabNavigationOptions> = {
  Home: {
    tabBarIcon: ({ focused }) => renderTabBarIcon(HomeIcon, focused),
    tabBarLabel: ({ focused }) => (
      <Text style={{ fontSize: 12, color: focused ? colors.black : 'gray' }}>
        Home
      </Text>
    ),
    headerShown: false,
  },
  Community: {
    tabBarIcon: ({ focused }) => renderTabBarIcon(BagIcon, focused),
    tabBarLabel: ({ focused }) => (
      <Text style={{ fontSize: 12, color: focused ? colors.black : 'gray' }}>
        Community
      </Text>
    ),
  },
  Map: {
    tabBarIcon: ({ focused }) => renderTabBarIcon(ProfileIcon, focused),
    tabBarLabel: ({ focused }) => (
      <Text style={{ fontSize: 12, color: focused ? colors.black : 'gray' }}>
        Map
      </Text>
    ),
    headerShown: false,
  },
  Chats: {
    tabBarIcon: ({ focused }) => renderTabBarIcon(ProfileIcon, focused),
    tabBarLabel: ({ focused }) => (
      <Text style={{ fontSize: 12, color: focused ? colors.black : 'gray' }}>
        Chats
      </Text>
    ),
    headerShown: false,
  },
  Profile: {
    tabBarIcon: ({ focused }) => renderTabBarIcon(ProfileIcon, focused),
    tabBarLabel: ({ focused }) => (
      <Text style={{ fontSize: 12, color: focused ? colors.black : 'gray' }}>
        Profile
      </Text>
    ),
    headerShown: false,
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
