import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BackIcon } from '../../../../icons';
import { searchStyles } from './styles';

interface SearchProps {
  visible?: boolean;
  onClose: () => void;
  onSelectNeighborhood?: (
    name: string,
    lat: number,
    lon: number,
    boundingBox?: { latitude: number; longitude: number }[],
  ) => void;
}

interface HistoryItem {
  name: string;
  lat: number;
  lon: number;
}

const SearchNeighborhoodModal = ({
  visible,
  onClose,
  onSelectNeighborhood,
}: SearchProps) => {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState<HistoryItem[]>([]);

  // ✅ Tarixni yuklash
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
                typeof item.lon === 'number',
            );
            setSearchHistory(valid);
          }
        }
      } catch (error) {
        console.warn('Failed to load search history:', error);
      }
    };

    loadHistory();
  }, []);

  // ✅ Tarixga qo'shish
  const saveToHistory = useCallback(
    async (item: HistoryItem) => {
      if (!item.name.trim()) return;

      try {
        const updatedHistory = [
          item,
          ...searchHistory.filter(t => t.name !== item.name),
        ].slice(0, 10);
        setSearchHistory(updatedHistory);
        await AsyncStorage.setItem(
          'searchHistory',
          JSON.stringify(updatedHistory),
        );
      } catch (error) {
        console.warn('Failed to save search history:', error);
      }
    },
    [searchHistory],
  );

  // ✅ Tarixdan o'chirish
  const removeFromHistory = async (name: string) => {
    try {
      const updated = searchHistory.filter(t => t.name !== name);
      setSearchHistory(updated);
      await AsyncStorage.setItem('searchHistory', JSON.stringify(updated));
    } catch (error) {
      console.warn('Failed to remove from history:', error);
    }
  };

  // Qidiruv natijalari
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      searchOSM(query);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const searchOSM = async (text: string) => {
    setLoading(true);
    try {
      const encodedQuery = encodeURIComponent(text);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodedQuery}, Uzbekistan&format=json&addressdetails=1&limit=10`,
        {
          headers: {
            'User-Agent': 'YourAppName/1.0 (your@email.com)',
          },
        },
      );
      const data = await response.json();

      const formatted: HistoryItem[] = data.map((item: any) => ({
        name: item.display_name,
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
      }));

      setResults(formatted);
    } catch (error) {
      console.error('OSM Search error:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (name: string, lat: number, lon: number) => {
    saveToHistory({ name, lat, lon });
    onSelectNeighborhood?.(name, lat, lon);
    onClose();
  };

  const showHistory = !query.trim() && searchHistory.length > 0;

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
          {
            paddingTop: insets.top || 10,
            paddingBottom: insets.bottom || 10,
          },
        ]}
      >
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
              {searchHistory.map((term, index) => (
                <View key={index} style={searchStyles.historyItemContainer}>
                  <Pressable
                    style={searchStyles.historyItem}
                    onPress={() => handleSelect(term.name, term.lat, term.lon)}
                  >
                    <Text style={searchStyles.listItemText}>{term.name}</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => removeFromHistory(term.name)}
                    style={searchStyles.clearButton}
                  >
                    <Text style={searchStyles.clearButtonText}>✕</Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </>
        ) : (
          <>
            <Text style={searchStyles.listTitle}>
              {query ? 'Natijalar' : 'Qidirish uchun yozing...'}
            </Text>
            <ScrollView style={searchStyles.listContainer}>
              {results.map((item, index) => (
                <Pressable
                  key={index}
                  style={searchStyles.listItem}
                  onPress={() => handleSelect(item.name, item.lat, item.lon)}
                >
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
