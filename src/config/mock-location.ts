export const USE_MOCK_LOCATION = true;
export const MOCK_LOCATION = {
  latitude: 40.6953,   // Andijon tuman, Akyar (Oqyar) mahallasi
  longitude: 72.4131,  // Andijon viloyati
};




// // --- Joylashuv ruxsatini so‘rash ---
// async function requestLocationPermission() {
//   if (Platform.OS === 'android') {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Location Permission',
//         message: 'This app needs access to your location',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     return granted === PermissionsAndroid.RESULTS.GRANTED;
//   } else if (Platform.OS === 'ios') {
//     const status = await Geolocation.requestAuthorization('whenInUse');
//     return status === 'granted';
//   }
//   return false;
// }

// // --- Hozirgi joylashuvni olish ---
// async function getCurrentLocation() {
//   const hasPermission = await requestLocationPermission();
//   if (!hasPermission) return null;

//   return new Promise<{ latitude: number; longitude: number }>(
//     (resolve, reject) => {
//       Geolocation.getCurrentPosition(
//         position => resolve(position.coords),
//         error => reject(error),
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//       );
//     },
//   );
// }