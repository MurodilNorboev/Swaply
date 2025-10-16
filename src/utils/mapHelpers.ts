import { LocationType } from "../screens/home/components/home-location/types";

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
