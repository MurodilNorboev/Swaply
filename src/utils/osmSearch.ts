import axios from 'axios';

export interface FormattedLocation {
  id: string;
  name: string;
  lat: number;
  lon: number;
  boundingBox?: { latitude: number; longitude: number }[];
  polygonPoints?: { latitude: number; longitude: number }[];
}
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

export async function getUzbekRegionPolygon(regionName: string): Promise<FormattedLocation | null> {
  try {
    console.log('🧭 Viloyat polygon olinmoqda:', regionName);
    const results = await searchOSM(`${regionName}, Uzbekistan`);

    if (!results.length) {
      console.warn('⚠️ Polygon topilmadi:', regionName);
      return null;
    }

    // faqat region (viloyat) turini tanlaymiz
    const region = results.find((r: any) =>
      r.name.toLowerCase().includes(regionName.toLowerCase()) &&
      (r.name.toLowerCase().includes('viloyati') || r.name.toLowerCase().includes('region'))
    );

    return region || results[0];
  } catch (error) {
    console.error('❌ getUzbekRegionPolygon error:', error);
    return null;
  }
}

export async function getLocationsByProvince(province: string): Promise<FormattedLocation[]> {
  try {
    const keywords = [
      province,
      `${province} tumani`,
      `${province} shahar`,
      `${province} mahalla`,
      `${province} qishlog‘i`,
      `${province} qishloq`,
      `${province} city`,
      `${province} village`,
    ];

    const allResults: FormattedLocation[] = [];

    for (const key of keywords) {
      const res = await searchOSM(key);
      allResults.push(...res);
    }

    const unique = allResults.filter(
      (item, i, self) => i === self.findIndex((x) => x.name === item.name)
    );

    return unique;
  } catch (error) {
    console.error('getLocationsByProvince error:', error);
    return [];
  }
}

// Reverse geocoding
export async function getProvince(lat: number, lon: number): Promise<string | null> {
  try {
    const res = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    if (res.data && res.data.address) {
      const { state, city, town } = res.data.address;
      return state || city || town || null;
    }
    return null;
  } catch (error) {
    console.error('getProvince error:', error);
    return null;
  }
}

// Kirilldan Lotinga o‘tkazish
export function transliterateToLatin(text: string): string {
  const map: Record<string, string> = {
    А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'Yo', Ж: 'J', З: 'Z', И: 'I', Й: 'Y',
    К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O', П: 'P', Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F',
    Х: 'X', Ц: 'S', Ч: 'Ch', Ш: 'Sh', Щ: 'Sh', Ъ: '', Ы: 'I', Ь: '', Э: 'E', Ю: 'Yu', Я: 'Ya',
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'j', з: 'z', и: 'i', й: 'y',
    к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
    х: 'x', ц: 's', ч: 'ch', ш: 'sh', щ: 'sh', ъ: '', ы: 'i', ь: '', э: 'e', ю: 'yu', я: 'ya',
  };
  return text.replace(/[А-яЁё]/g, (char) => map[char] || char);
}

