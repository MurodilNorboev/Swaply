import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker, Circle, UrlTile } from 'react-native-maps';
import { colors } from '../../../../theme';
import { RegionType, RegionMock } from '../../../../utils';
import { SearchComponent } from '../search';
import { HomeSearchIcon } from '../../../../icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LocationPicker } from '../../../home/components';
import { LocationType } from '../../../home/components/home-location/types';

export const MapComponent = () => {
  const mapRef = useRef<MapView>(null);
  const insets = useSafeAreaInsets();

  // State
  const [selectedRegion, setSelectedRegion] = useState<RegionType | null>(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null,
  );
  const [locations, setLocations] = useState<LocationType[]>([]);
  console.log(
    'locations: ',
    selectedLocation,
    selectedRegion,
    searchVisible,
    locations,
  );

  return (
    <View style={styles.container}>
      {/* Top Panel */}
      <View style={[styles.topPanel, { top: insets.top + 10 }]}>
        <LocationPicker
          selectedLocation={selectedLocation}
          onSelectedLocationChange={setSelectedLocation}
          locations={locations}
          onLocationsChange={setLocations}
        />
        <TouchableOpacity
          style={styles.searchIconWrapper}
          onPress={() => setSearchVisible(true)}
          activeOpacity={0.8}
        >
          <HomeSearchIcon color="gray" />
        </TouchableOpacity>
      </View>

      {/* Map */}
      <MapView ref={mapRef} style={styles.map}>
        <UrlTile
          urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          zIndex={0}
        />
        {selectedRegion && (
          <>
            <Marker
              coordinate={{
                latitude: selectedRegion.latitude,
                longitude: selectedRegion.longitude,
              }}
              title={selectedRegion.category || selectedRegion.address}
            />
            <Circle
              center={{
                latitude: selectedRegion.latitude,
                longitude: selectedRegion.longitude,
              }}
              radius={selectedRegion.radius || 3000}
              strokeColor={colors.lightGreen}
              fillColor="rgba(13, 119, 94, 0.15)"
              strokeWidth={2}
            />
          </>
        )}
      </MapView>

      {/* Search Modal */}
      <SearchComponent
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
        selectedCenter={
          selectedLocation ? { id: selectedLocation.id } : undefined
        }
        onSelectRegion={region => {
          setSelectedRegion(region);
          mapRef.current?.animateToRegion(
            {
              latitude: region.latitude,
              longitude: region.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            },
            500,
          );
        }}
        selectedLocation={selectedLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  searchIconWrapper: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topPanel: {
    paddingHorizontal: 15,
    width: '100%',
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});


// import React, { useRef, useState, useMemo } from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import MapView, { Marker, Circle, UrlTile } from 'react-native-maps';
// import { colors } from '../../../../theme';
// import { RegionType, RegionMock, getBoundingBox, isWithinBoundingBox } from '../../../../utils';
// import { SearchComponent } from '../search';
// import { HomeSearchIcon } from '../../../../icons';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { LocationPicker } from '../../../home/components';
// import { LocationType } from '../../../home/components/home-location/types';

// export const MapComponent = () => {
//   const mapRef = useRef<MapView>(null);
//   const insets = useSafeAreaInsets();

//   const [selectedRegion, setSelectedRegion] = useState<RegionType | null>(null);
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);
//   const [locations, setLocations] = useState<LocationType[]>([]);

//   // ✅ Filtrlangan regionlarni hisoblash
//   const visibleRegions = useMemo(() => {
//     if (!selectedLocation || !selectedLocation.radius) {
//       return []; // Radius yo'qsa hech nima chiqarmaymiz (yoki barchasini chiqarish ham mumkin)
//     }

//     const bbox = getBoundingBox(
//       selectedLocation.latitude,
//       selectedLocation.longitude,
//       selectedLocation.radius
//     );

//     return RegionMock.filter(region =>
//       isWithinBoundingBox(region.latitude, region.longitude, bbox)
//     );
//   }, [selectedLocation]);

//   return (
//     <View style={styles.container}>
//       {/* Top Panel */}
//       <View style={[styles.topPanel, { top: insets.top + 10 }]}>
//         <LocationPicker
//           selectedLocation={selectedLocation}
//           onSelectedLocationChange={setSelectedLocation}
//           locations={locations}
//           onLocationsChange={setLocations}
//         />
//         <TouchableOpacity
//           style={styles.searchIconWrapper}
//           onPress={() => setSearchVisible(true)}
//           activeOpacity={0.8}
//         >
//           <HomeSearchIcon color="gray" />
//         </TouchableOpacity>
//       </View>

//       {/* Map */}
//       <MapView ref={mapRef} style={styles.map}>
//         <UrlTile
//           urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" // ✅ bo'shliqni olib tashladik
//           zIndex={0}
//         />

//         {/* Tanlangan hududdagi BARCHA regionlarni ko'rsatish */}
//         {visibleRegions.map(region => (
//           <Marker
//             key={region.id}
//             coordinate={{
//               latitude: region.latitude,
//               longitude: region.longitude,
//             }}
//             title={region.items[0] || region.address}
//             pinColor="blue"
//           />
//         ))}

//         {/* Qidiruv natijasi (selectedRegion) */}
//         {selectedRegion && (
//           <>
//             <Marker
//               coordinate={{
//                 latitude: selectedRegion.latitude,
//                 longitude: selectedRegion.longitude,
//               }}
//               title={selectedRegion.category || selectedRegion.address}
//               pinColor="red"
//             />
//             <Circle
//               center={{
//                 latitude: selectedRegion.latitude,
//                 longitude: selectedRegion.longitude,
//               }}
//               radius={selectedRegion.radius || 3000}
//               strokeColor={colors.lightGreen}
//               fillColor="rgba(13, 119, 94, 0.15)"
//               strokeWidth={2}
//             />
//           </>
//         )}

//         {/* Tanlangan manzil doirasi (radius) */}
//         {selectedLocation?.radius && (
//           <Circle
//             center={{
//               latitude: selectedLocation.latitude,
//               longitude: selectedLocation.longitude,
//             }}
//             radius={selectedLocation.radius}
//             strokeColor="purple"
//             fillColor="rgba(128, 0, 128, 0.1)"
//             strokeWidth={2}
//           />
//         )}
//       </MapView>

//       {/* Search Modal */}
//       <SearchComponent
//         visible={searchVisible}
//         onClose={() => setSearchVisible(false)}
//         selectedLocation={selectedLocation}
//         onSelectRegion={region => {
//           setSelectedRegion(region);
//           mapRef.current?.animateToRegion(
//             {
//               latitude: region.latitude,
//               longitude: region.longitude,
//               latitudeDelta: 0.1,
//               longitudeDelta: 0.1,
//             },
//             500,
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   map: { flex: 1 },
//   searchIconWrapper: {
//     width: 45,
//     height: 45,
//     borderRadius: 25,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   topPanel: {
//     paddingHorizontal: 15,
//     width: '100%',
//     position: 'absolute',
//     zIndex: 2,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
// });