import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Portal } from 'react-native-paper';
import { SCREEN_WIDTH, styles } from './styles';
import { menuGroups } from './types';
import { Header } from '../header.panel';

export const HomeNotification = ({ visible, onClose }: any) => {
  const insets = useSafeAreaInsets();
  const MENU_WIDTH = SCREEN_WIDTH * 1.0;
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : MENU_WIDTH,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setIsAnimating(false);
    });
  }, [visible]);

  if (!visible && !isAnimating) {
    return null;
  }

  return (
    <Portal>
      <View
        style={[
          styles.$overlay,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.sideMenu,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <Header title="All Services" onClose={onClose} />
            <FlatList
              data={menuGroups}
              keyExtractor={item => item.title}
              renderItem={({ item: group }) => (
                <View style={styles.groupContainer}>
                  <Text style={styles.groupTitle}>{group.title}</Text>
                  <FlatList
                    data={group.data}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                      <Pressable style={styles.menuItem} onPress={() => {}}>
                        <Text style={styles.icon}>{item.icon}</Text>
                        <Text style={styles.label}>{item.label}</Text>
                      </Pressable>
                    )}
                  />
                </View>
              )}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          </SafeAreaView>
        </Animated.View>
      </View>
    </Portal>
  );
};
