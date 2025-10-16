import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import { Portal } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getBoundingBox, isWithinBoundingBox, RegionMock, RegionType } from '../../../../utils';
import { LocationType } from '../../../home/components/home-location/types';

interface SearchProps {
  visible: boolean;
  onClose: () => void;
  onSelectRegion?: (region: RegionType) => void;
  selectedCenter?: { id: number | string };
  selectedLocation?: LocationType;
}

export const SearchComponent = ({
  visible,
  onClose,
  onSelectRegion,
  selectedLocation,
}: SearchProps) => {
  const [input, setInput] = useState('');
  const [filteredRegions, setFilteredRegions] = useState<RegionType[]>([]);
  const slideAnim = useRef(new Animated.Value(100)).current;

useEffect(() => {
  let filtered = RegionMock;

  // 1. Shahar nomi bo'yicha filtrlash (ixtiyoriy, lekin tavsiya etiladi)
  if (selectedLocation?.name) {
    const normalizedSelected = normalizeCityName(selectedLocation.name);
    filtered = filtered.filter(region => {
      const regionName = (region.region || '').toLowerCase();
      return regionName === normalizedSelected;
    });
  }

  // 2. Radius asosida bounding box orqali cheklash
  if (
    selectedLocation?.radius &&
    selectedLocation.latitude &&
    selectedLocation.longitude
  ) {
    const bbox = getBoundingBox(
      selectedLocation.latitude,
      selectedLocation.longitude,
      selectedLocation.radius
    );

    filtered = filtered.filter(region =>
      isWithinBoundingBox(region.latitude, region.longitude, bbox)
    );
  }

  // 3. Input bo'yicha qidiruv
  if (input.trim()) {
    filtered = filtered.filter(region =>
      region.items.some(item =>
        item.toLowerCase().includes(input.toLowerCase())
      )
    );
  }

  setFilteredRegions(filtered);
}, [input, selectedLocation]);

//   useEffect(() => {
//     let filtered = RegionMock;
  
//     if (selectedLocation?.name) {
//       const normalizedSelected = normalizeCityName(selectedLocation.name); // "samarqand"
  
//       filtered = filtered.filter(region => {
//         const regionName = (region.region || '').toLowerCase(); // "samarqand"
//         return regionName === normalizedSelected; // aniq moslik
//       });
//     }
  
//     if (input.trim()) {
//       filtered = filtered.filter(region =>
//         region.items.some(item =>
//           item.toLowerCase().includes(input.toLowerCase())
//         )
//       );
//     }
  
//     setFilteredRegions(filtered);
//   }, [input, selectedLocation]);
  
  // Funksiyani komponent tashqarisiga qo'shing:
  function normalizeCityName(fullName: string): string {
    const firstPart = fullName.split(',')[0].trim();
    return firstPart
      .toLowerCase()
      .replace(/ viloyati$/, '')
      .replace(/ shahri$/, '')
      .replace(/ city$/, '')
      .replace(/ region$/, '')
      .trim()
      .split(' ')[0];
  }

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 100,
      duration: 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [visible]);

  if (!visible) return null;

  return (
    <Portal>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'white',
          transform: [{ translateY: slideAnim }],
        }}
      >
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                height: 45,
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 8,
                paddingHorizontal: 12,
              }}
              placeholder="Joy nomi, tuman yoki item kiriting"
              value={input}
              onChangeText={setInput}
              autoFocus
            />
            <TouchableOpacity
              onPress={onClose}
              style={{ marginLeft: 10, paddingHorizontal: 8 }}
            >
              <Text style={{ fontSize: 16, color: '#007AFF' }}>Yopish</Text>
            </TouchableOpacity>
          </View>

          {/* Results */}
          <FlatList
            data={filteredRegions}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelectRegion?.(item);
                  onClose();
                }}
                style={{
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#eee',
                }}
              >
                <Text style={{ fontSize: 15 }}>
                  {item.items || item.address}
                </Text>
                <Text style={{ color: 'gray', fontSize: 12 }}>
                  {item.district}
                </Text>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Animated.View>
    </Portal>
  );
};
