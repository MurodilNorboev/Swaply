import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BackIcon, HomeSearchIcon } from '../../../../icons';
import { searchStyles } from './styles';
import { getCurrentLocation } from './NeighborhoodSettings';
import { USE_MOCK_LOCATION, MOCK_LOCATION } from '../../../../config';
import { LogBox } from 'react-native';
import { SearchProps } from './types';
import {
  searchOSM,
  getLocationsByProvince,
  getProvince,
  transliterateToLatin,
  FormattedLocation,
} from '../../../../utils';

LogBox.ignoreAllLogs(true);
const STORAGE_KEY = 'recentSearches';

interface RecentSearch {
  query: string;
  firstResult?: FormattedLocation;
}

const SearchNeighborhoodModal = ({
  visible,
  onClose,
  onSelectNeighborhood,
}: SearchProps) => {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FormattedLocation[]>([]);
  const [loading, setLoading] = useState(false);
  const [regionData, setRegionData] = useState<FormattedLocation[]>([]);
  const [userRegion, setUserRegion] = useState<string | null>(null);
  const [showRecent, setShowRecent] = useState(false);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);

  useEffect(() => {
    const init = async () => {
      // --- RecentSearches o'qish ---
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setRecentSearches(
          parsed.map((p: any) => (typeof p === 'string' ? { query: p } : p)),
        );
      }

      // --- User location va regionData ---
      setLoading(true);
      try {
        const coords = USE_MOCK_LOCATION
          ? MOCK_LOCATION
          : await getCurrentLocation();
        if (!coords) return;

        const province = await getProvince(coords.latitude, coords.longitude);
        if (!province) return;

        setUserRegion(province);

        const latinProvince = transliterateToLatin(province)
          .replace(/Viloyati|Вилояти/g, '')
          .trim();

        setRegionData(await getLocationsByProvince(latinProvince));
      } catch (e) {
        console.error('Fetch region error:', e);
      }
      setLoading(false);
    };

    init();
  }, []);

  // --- AsyncStorage ga yozish ---
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = async (text?: string, fromRecent = false) => {
    setShowRecent(false);
    const searchQuery = text || query.trim();
    if (!searchQuery) return;

    setLoading(true);
    const res = await searchOSM(searchQuery);
    setResults(res);
    setLoading(false);

    if (!fromRecent && res.length) {
      const first = res[0];
      setRecentSearches(prev =>
        [
          { query: searchQuery, firstResult: first },
          ...prev.filter(r => r.query !== searchQuery),
        ].slice(0, 5),
      );
    }

    if (fromRecent && res.length) {
      const first = res[0];
      onSelectNeighborhood?.(
        first.name,
        first.lat,
        first.lon,
        first.boundingBox,
        first.polygonPoints,
      );
    }
  };

  const handleInputFocus = () => recentSearches.length && setShowRecent(true);

  const handleSelectRecent = async (item: RecentSearch) => {
    setShowRecent(false);
    if (item.firstResult) {
      const r = item.firstResult;
      onSelectNeighborhood?.(
        r.name,
        r.lat,
        r.lon,
        r.boundingBox,
        r.polygonPoints,
      );
    } else {
      await handleSearch(item.query, true);
    }
  };

  const handleBackPress = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  const displayedResults = query.trim() ? results : regionData;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={[
          searchStyles.container,
          { paddingTop: insets.top || 10, paddingBottom: insets.bottom || 10 },
        ]}
      >
        {/* Header */}
        <View style={searchStyles.header}>
          <Pressable onPress={handleBackPress} style={searchStyles.backButton}>
            <BackIcon width={32} height={32} fill="#f9f9f9" />
          </Pressable>

          <TextInput
            style={searchStyles.searchInput}
            placeholder="Hududni qidirish (mahalla, joy nomi)"
            placeholderTextColor="#999"
            value={query}
            onChangeText={setQuery}
            onFocus={handleInputFocus}
          />

          <Pressable
            onPress={() => handleSearch()}
            style={({ pressed }) => [
              searchStyles.searchButton,
              pressed && { opacity: 0.7 },
            ]}
          >
            <HomeSearchIcon color="#fff" style={{ marginRight: 6 }} />
          </Pressable>
        </View>

        {loading && (
          <View style={searchStyles.loading}>
            <ActivityIndicator color="white" />
          </View>
        )}

        {/* RecentSearches */}
        {showRecent && !loading && recentSearches.length > 0 && (
          <View style={{ padding: 12 }}>
            {recentSearches.map((item, i) => (
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 8,
                  borderBottomWidth: 0.5,
                  borderBottomColor: '#444',
                }}
              >
                <Pressable
                  onPress={() => {
                    handleSelectRecent(item);
                    handleBackPress();
                  }}
                  style={{ flex: 1 }}
                >
                  <Text style={{ color: '#f9f9f9', fontSize: 16 }}>
                    {item.firstResult?.name || item.query}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() =>
                    setRecentSearches(prev =>
                      prev.filter(r => r.query !== item.query),
                    )
                  }
                  style={{ paddingHorizontal: 8 }}
                >
                  <Text style={{ color: '#f55', fontSize: 16 }}>X</Text>
                </Pressable>
              </View>
            ))}
          </View>
        )}

        {/* UserRegion */}
        {!showRecent && !query.trim() && userRegion && (
          <View style={{ padding: 10 }}>
            <Text
              style={searchStyles.listTitle}
            >{`${userRegion} hududidagi joylar`}</Text>
          </View>
        )}

        {/* Natijalar */}
        {!showRecent && (
          <ScrollView style={searchStyles.listContainer}>
            {loading ? null : displayedResults.length > 0 ? (
              displayedResults.map((item, i) => (
                <Pressable
                  key={i}
                  style={searchStyles.listItem}
                  onPress={() => {
                    onSelectNeighborhood?.(
                      item.name,
                      item.lat,
                      item.lon,
                      item.boundingBox,
                      item.polygonPoints,
                    );
                    handleBackPress();
                  }}
                >
                  <Text style={searchStyles.listItemText}>{item.name}</Text>
                </Pressable>
              ))
            ) : query.trim() ? (
              <View style={{ padding: 32, alignItems: 'center' }}>
                <Text
                  style={{
                    color: '#f9f9f9',
                    fontSize: 16,
                    textAlign: 'center',
                  }}
                >
                  No results!
                </Text>
              </View>
            ) : null}
          </ScrollView>
        )}
      </View>
    </Modal>
  );
};

export default SearchNeighborhoodModal;
