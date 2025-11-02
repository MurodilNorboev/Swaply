import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Modal, Pressable, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BackIcon } from '../../../../icons';
import { searchStyles } from './styles';
import { searchOSM, FormattedLocation } from '../../../../utils/osmSearch';

interface SearchProps {
  visible?: boolean;
  onClose: () => void;
  onSelectNeighborhood?: (
    name: string,
    lat: number,
    lon: number,
    boundingBox?: { latitude: number; longitude: number }[],
    polygonPoints?: { latitude: number; longitude: number }[]
  ) => void;
}

type HistoryItem = { name: string; lat: number; lon: number; polygonPoints?: { latitude: number; longitude: number }[] };

const SearchNeighborhoodModal = ({
  visible,
  onClose,
  onSelectNeighborhood,
}: SearchProps) => {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FormattedLocation[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const saved = await AsyncStorage.getItem('searchHistory');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            const valid = parsed.filter(
              (item: any) =>
                typeof item.name === 'string' &&
                typeof item.lat === 'number' &&
                typeof item.lon === 'number'
            );
            setSearchHistory(valid);
          }
        }
      } catch (error) {
        console.warn('Failed to load history:', error);
      }
    };
    loadHistory();
  }, []);

  const saveToHistory = useCallback(
    async (item: HistoryItem) => {
      if (!item.name.trim()) return;
      const updated = [item, ...searchHistory.filter(t => t.name !== item.name)].slice(0, 10);
      setSearchHistory(updated);
      await AsyncStorage.setItem('searchHistory', JSON.stringify(updated)).catch(console.warn);
    },
    [searchHistory]
  );

  const removeFromHistory = (name: string) => {
    const updated = searchHistory.filter(t => t.name !== name);
    setSearchHistory(updated);
    AsyncStorage.setItem('searchHistory', JSON.stringify(updated)).catch(console.warn);
  };

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setLoading(true);
      const res = await searchOSM(query);
      setResults(res);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (item: FormattedLocation) => {
    // polygonPoints mavjud bo‘lsa uzatamiz
    saveToHistory({ name: item.name, lat: item.lat, lon: item.lon, polygonPoints: item.polygonPoints });
    onSelectNeighborhood?.(item.name, item.lat, item.lon, item.boundingBox, item.polygonPoints);
    onClose();
  };

  const showHistory = !query.trim() && searchHistory.length > 0;

  return (
    <Modal animationType="slide" transparent={false} visible={visible} onRequestClose={onClose}>
      <View style={[searchStyles.container, { paddingTop: insets.top || 10, paddingBottom: insets.bottom || 10 }]}>
        <View style={searchStyles.header}>
          <Pressable onPress={onClose} style={searchStyles.backButton}>
            <BackIcon width={32} height={32} fill="#f9f9f9" />
          </Pressable>
          <TextInput
            style={searchStyles.searchInput}
            placeholder="Hududni qidirish (Tuman, shahar, mahalla)"
            placeholderTextColor="#999"
            value={query}
            onChangeText={setQuery}
            autoFocus
          />
        </View>

        {loading && (
          <View style={searchStyles.loading}>
            <ActivityIndicator color="white" />
          </View>
        )}

        {showHistory ? (
          <>
            <Text style={searchStyles.listTitle}>So'nggi qidiruvlar</Text>
            <ScrollView style={searchStyles.listContainer}>
              {searchHistory.map((term, i) => (
                <View key={i} style={searchStyles.historyItemContainer}>
                  <Pressable
                    style={searchStyles.historyItem}
                    onPress={() =>
                      handleSelect({
                        id: `${term.name}_${term.lat}_${term.lon}`.replace(/\s+/g, '_').toLowerCase(),
                        name: term.name,
                        lat: term.lat,
                        lon: term.lon,
                        boundingBox: undefined,
                        polygonPoints: term.polygonPoints,
                      })
                    }
                  >
                    <Text style={searchStyles.listItemText}>{term.name}</Text>
                  </Pressable>
                  <Pressable onPress={() => removeFromHistory(term.name)} style={searchStyles.clearButton}>
                    <Text style={searchStyles.clearButtonText}>✕</Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </>
        ) : (
          <>
            <Text style={searchStyles.listTitle}>{query ? 'Natijalar' : 'Qidirish uchun yozing...'}</Text>
            <ScrollView style={searchStyles.listContainer}>
              {results.map((item, i) => (
                <Pressable key={i} style={searchStyles.listItem} onPress={() => handleSelect(item)}>
                  <Text style={searchStyles.listItemText}>{item.name}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </>
        )}
      </View>
    </Modal>
  );
};

export default SearchNeighborhoodModal;
