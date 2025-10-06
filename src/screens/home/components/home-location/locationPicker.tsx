import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';
import NeighborhoodSettings from './NeighborhoodSettings';

const { width } = Dimensions.get('window');

export const LocationPicker = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, w: 0 });
  const buttonRef = useRef<View>(null);
  const [showNeighborhood, setShowNeighborhood] = useState(false);

  const options = ['Toshkent', 'Andijon', 'Neighborhood settings'];

  const openDropdown = () => {
    buttonRef.current?.measure((_fx, _fy, w, h, px, py) => {
      setPosition({ top: py + h, left: px, w });
      setOpen(true);
    });
  };

  return (
    <View>
      {/* Select Button */}
      <Pressable
        style={styles.$selectBox}
        ref={buttonRef}
        onPress={openDropdown}
      >
        <Text>{selected || 'Select a location'}</Text>
      </Pressable>

      {/* Dropdown Modal */}
      <Modal visible={open} transparent animationType="fade">
        <Pressable style={styles.$backdrop} onPress={() => setOpen(false)}>
          <View
            style={[
              styles.$dropdown,
              { top: position.top, left: position.left, width: position.w },
            ]}
          >
            <FlatList
              data={options}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.$option}
                  onPress={() => {
                    if (item === 'Neighborhood settings') {
                      setShowNeighborhood(true);
                    } else {
                      setSelected(item);
                    }
                    setOpen(false);
                  }}
                >
                  <Text>{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>

      {/* Neighborhood Settings */}
      <NeighborhoodSettings
        visible={showNeighborhood}
        onClose={() => setShowNeighborhood(false)}
        location={
          selected
            ? { latitude: 37.5665, longitude: 126.978, name: selected }
            : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  $selectBox: {
    width: width * 0.3,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  $backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  $dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: 200,
  },
  $option: {
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
});
