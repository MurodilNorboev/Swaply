import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Animated,
  Easing,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { SCREEN_WIDTH, styles } from './styles';
import { menuGroups } from './types';
import { Header } from '../header.panel';
import { Portal } from 'react-native-paper';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const HomeMenu = ({ visible, onClose }: any) => {
  const insets = useSafeAreaInsets();
  const MENU_WIDTH = SCREEN_WIDTH;
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    setIsAnimating(true);
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -MENU_WIDTH,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => setIsAnimating(false));
  }, [visible]);

  if (!visible && !isAnimating) return null;

  const toggleGroup = (title: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedGroup(expandedGroup === title ? null : title);
  };

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
          style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <Header title="All Services" onClose={onClose} />

            <View style={styles.menuList}>
              {menuGroups.map(group => (
                <View key={group.title}>
                  <Pressable
                    style={styles.groupHeader}
                    onPress={() => toggleGroup(group.title)}
                  >
                    <Text style={styles.groupTitle}>{group.title}</Text>
                    <Text style={styles.cardLabel}>
                      {expandedGroup === group.title ? '▲' : '▼'}
                    </Text>
                  </Pressable>

                  {expandedGroup === group.title && (
                    <View style={styles.serviceList}>
                      {group.data.map(item => (
                        <Pressable
                          key={item.id}
                          style={styles.serviceItem}
                          onPress={() => console.log('Selected:', item.label)}
                        >
                          <Text style={styles.serviceText}>{item.label}</Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          </SafeAreaView>
        </Animated.View>
      </View>
    </Portal>
  );
};
