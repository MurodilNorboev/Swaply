
export const getBoundingBox = (latitude: number, longitude: number, radiusMeters: number) => {
  const earthRadius = 6378137; // meter
  const dLat = radiusMeters / earthRadius;
  const dLon = radiusMeters / (earthRadius * Math.cos((Math.PI * latitude) / 180));

  return {
    north: latitude + (dLat * 180) / Math.PI,
    south: latitude - (dLat * 180) / Math.PI,
    east: longitude + (dLon * 180) / Math.PI,
    west: longitude - (dLon * 180) / Math.PI,
  };
};

// Hudud ichida ekanligini tekshirish
export const isWithinBoundingBox = (
  pointLat: number,
  pointLng: number,
  boundingBox: { north: number; south: number; east: number; west: number },
) => {
  return (
    pointLat <= boundingBox.north &&
    pointLat >= boundingBox.south &&
    pointLng <= boundingBox.east &&
    pointLng >= boundingBox.west
  );
};


// utils/mapHelpers.ts
export const expandBoundingBox = (
  bbox: { north: number; south: number; east: number; west: number },
  factor: number
) => {
  const latCenter = (bbox.north + bbox.south) / 2;
  const lonCenter = (bbox.east + bbox.west) / 2;
  const latDelta = (bbox.north - bbox.south) / 2 * factor;
  const lonDelta = (bbox.east - bbox.west) / 2 * factor;
  return {
    north: latCenter + latDelta,
    south: latCenter - latDelta,
    east: lonCenter + lonDelta,
    west: lonCenter - lonDelta,
  };
};

export const bboxToPolygon = (bbox: { north: number; south: number; east: number; west: number }) => [
  { latitude: bbox.south, longitude: bbox.west },
  { latitude: bbox.south, longitude: bbox.east },
  { latitude: bbox.north, longitude: bbox.east },
  { latitude: bbox.north, longitude: bbox.west },
];
