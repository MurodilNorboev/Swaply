export type LocationType = {
  id: string | number;
  name: string;
  latitude: number;
  longitude: number;
  radius?: number;
  boundingBox?: { latitude: number; longitude: number }[];
  polygonPoints?: { latitude: number; longitude: number }[]; 
} | null;


export type Props = {
  visible: boolean;
  onClose: () => void;
  location: LocationType;
  initialLocations?: (LocationType | null)[];
  onLocationsChange?: (locations: (LocationType | null)[]) => void;
  onSelectedLocationChange?: (location: LocationType) => void;
  autoOpenSecond?: boolean;
};