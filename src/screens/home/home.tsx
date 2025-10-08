import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as sty from './styles';
import * as components from './components';
import * as icons from '../../icons';
import { MenuState } from './type';

export const HomeScreen = () => {
  const [state, setState] = useState<MenuState>({
    menu: false,
    search: false,
    notification: false,
  });

  const toggle = (key: keyof MenuState) =>
    setState(prev => ({ ...prev, [key]: !prev[key] }));

  const iconList: { Icon: React.ElementType; key: keyof MenuState }[] = [
    { Icon: icons.HomeMenuIcon, key: 'menu' },
    { Icon: icons.HomeSearchIcon, key: 'search' },
    { Icon: icons.HomeNotificationIcon, key: 'notification' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={sty.MenuStyl.$topBar}>
        {iconList.map(({ Icon, key }) => {
          if (key === 'search' || key === 'notification') return null;
          return (
            <Pressable key={key} onPress={() => toggle(key)}>
              <Icon width={24} height={24} />
            </Pressable>
          );
        })}
        <View style={sty.MenuStyl.$topBariconWrap}>
          {iconList.map(({ Icon, key }) => {
            if (key === 'menu') return null;
            return (
              <Pressable key={key} onPress={() => toggle(key)}>
                <Icon width={24} height={24} />
              </Pressable>
            );
          })}
        </View>
      </View>
      <components.HomeSearch
        visible={state.search}
        onClose={() => toggle('search')}
      />
      <components.HomeMenu
        visible={state.menu}
        onClose={() => toggle('menu')}
      />
      <components.HomeNotification
        visible={state.notification}
        onClose={() => toggle('notification')}
      />
    </SafeAreaView>
  );
};
