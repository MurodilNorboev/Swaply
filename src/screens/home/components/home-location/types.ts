export type LocationType = {
  boundingBox: any;
  latitude: number;
  longitude: number;
  name: string;
} | null;

export type Props = {
  visible: boolean;
  onClose: () => void;
  location: LocationType;
  onLocationsChange?: (locations: LocationType[]) => void;
  onSelectedLocationChange?: (location: LocationType) => void; 
  autoOpenSecond?: boolean;
};