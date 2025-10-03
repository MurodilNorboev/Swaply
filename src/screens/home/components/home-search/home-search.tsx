// import { TextField } from '../../../../components';
// import { colors, spacing } from '../../../../theme';
// import { Pressable, View, ViewStyle } from 'react-native';
// import { hexToRgb } from '../../../../utils';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// export const HomeSearch = () => {
//   const handleSearchPress = () => {
//     console.log('Search pressed');
//   };

//   const handleFilterPress = () => {
//     console.log('Filter pressed');
//   };

//   return (
//     <View style={{ paddingHorizontal: spacing.md }}>
//       <TextField
//         LeftAccessory={() => (
//           <Pressable onPress={handleSearchPress}>
//             <MaterialIcons
//               name="search"
//               size={24}
//               color={colors.gray1}
//               style={{ marginLeft: spacing.sm }}
//             />
//           </Pressable>
//         )}
//         RightAccessory={() => (
//           <Pressable style={$filterButton} onPress={handleFilterPress}>
//             <MaterialCommunityIcons
//               name="filter-variant"
//               size={22}
//               color={colors.white}
//             />
//           </Pressable>
//         )}
//         placeholder="Search for coffee"
//         inputWrapperStyle={$searchWrapper}
//       />
//     </View>
//   );
// };

// const $searchWrapper: ViewStyle = {
//   backgroundColor: hexToRgb(colors.white, 0.6),
//   borderWidth: 0.5,
//   borderColor: colors.commonBorder,
//   alignItems: 'center',
//   marginVertical: spacing.md,
//   borderRadius: spacing.md,
// };

// const $filterButton: ViewStyle = {
//   padding: spacing.xs,
//   backgroundColor: colors.brown,
//   borderRadius: spacing.xs,
//   marginRight: spacing.sm,
// };

import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, FlatList, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon } from '../../../../icons';
import { headerStyles, SCREEN_WIDTH, styles } from './styles';
import { menuGroups } from './types';

export const HomeSearch = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const translateX = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: visible ? 0 : SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View style={[styles.sideMenu, { transform: [{ translateX }] }]}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="All Services" onClose={onClose} />
        <FlatList
          key={'flatlist'}
          data={menuGroups}
          keyExtractor={item => item.title}
          renderItem={({ item: group }) => (
            <View style={styles.groupContainer}>
              <Text style={styles.groupTitle}>{group.title}</Text>
              <FlatList
                key={group.title}
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
  );
};

const Header = ({ title, onClose }: { title: string; onClose: () => void }) => (
  <View style={headerStyles.container}>
    <Pressable onPress={onClose} style={headerStyles.backButton}>
      <BackIcon width={32} height={32} fill="#000" />
    </Pressable>
    <Text style={headerStyles.title}>{title}</Text>
    <View style={headerStyles.spacer} />
  </View>
);
