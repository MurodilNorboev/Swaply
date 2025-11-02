import axios from 'axios';

export interface FormattedLocation {
  id: string;
  name: string;
  lat: number;
  lon: number;
  boundingBox?: { latitude: number; longitude: number }[];
  polygonPoints?: { latitude: number; longitude: number }[];
}

/**
 * 🔍 OpenStreetMap orqali joy qidirish va to‘liq koordinatalarni (Polygon yoki BoundingBox)
 * aniqlab olish funksiyasi
 */
export async function searchOSM(query: string): Promise<FormattedLocation[]> {
  console.log('🔍 OSM qidiruv boshlandi:', query);

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    query,
  )}&polygon_geojson=1&addressdetails=1`;

  try {
    console.log('🌐 So‘rov yuborilayapti:', url);
    const response = await axios.get(url, {
      headers: { 'Accept-Language': 'uz', 'User-Agent': 'SwaplyApp/1.0' },
    });
    console.log('📥 Javob holati:', response.status);

    const data = response.data;
    if (!Array.isArray(data) || data.length === 0) {
      console.warn('⚠️ Hech qanday natija topilmadi.');
      return [];
    }

    const formatted: FormattedLocation[] = data.map((item: any) => {
      // 🗺️ Bounding Box
      const bbox = item.boundingbox
        ? [
            {
              latitude: parseFloat(item.boundingbox[0]),
              longitude: parseFloat(item.boundingbox[2]),
            },
            {
              latitude: parseFloat(item.boundingbox[0]),
              longitude: parseFloat(item.boundingbox[3]),
            },
            {
              latitude: parseFloat(item.boundingbox[1]),
              longitude: parseFloat(item.boundingbox[3]),
            },
            {
              latitude: parseFloat(item.boundingbox[1]),
              longitude: parseFloat(item.boundingbox[2]),
            },
          ]
        : [];

      // 📍 Polygon yoki MultiPolygon
      let polygonPoints: { latitude: number; longitude: number }[] = [];

      if (item.geojson?.type === 'Polygon') {
        console.log('🟢 Polygon topildi:', item.display_name);
        polygonPoints = item.geojson.coordinates[0].map((coord: number[]) => ({
          latitude: coord[1],
          longitude: coord[0],
        }));
      } else if (item.geojson?.type === 'MultiPolygon') {
        console.log('🟣 MultiPolygon topildi:', item.display_name);
        polygonPoints = item.geojson.coordinates.flatMap((poly: any) =>
          poly[0].map((coord: number[]) => ({
            latitude: coord[1],
            longitude: coord[0],
          })),
        );
      } else {
        console.log(
          '⚪ Polygon mavjud emas:',
          item.display_name,
          'type:',
          item.geojson?.type,
        );
      }

      // 🔹 Polygon loglari to‘g‘ri joyda
      console.log('🔹 Polygon nuqtalari soni:', polygonPoints.length, polygonPoints.map((coord) => `${coord.latitude}, ${coord.longitude}`));
      if (polygonPoints.length > 0) {
        console.log(
          '🧭 Birinchi 5 ta polygon nuqta:',
          polygonPoints.slice(0, 5),
        );
      }

      return {
        id: `${item.display_name}_${item.lat}_${item.lon}`
          .replace(/\s+/g, '_')
          .toLowerCase(),
        name: item.display_name,
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
        boundingBox: bbox,
        polygonPoints: polygonPoints.length ? polygonPoints : undefined,
      };
    });

    console.log('✅ OSM natijalari tayyor:', formatted);
    return formatted;
  } catch (error) {
    console.error('❌ OSM qidiruv xatosi:', error);
    return [];
  }
}
