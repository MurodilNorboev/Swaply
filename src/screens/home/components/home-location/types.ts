export type LocationType = {
  id: string | number; 
  boundingBox: any;
  latitude: number;
  longitude: number;
  name: string;
  radius?: number; 
} | null;

export type Props = {
  visible: boolean;
  onClose: () => void;
  location: LocationType;
  initialLocations?: (LocationType | null)[];
  onLocationsChange?: (locations: LocationType[]) => void;
  onSelectedLocationChange?: (location: LocationType) => void; 
  autoOpenSecond?: boolean;
};
// export interface Props {
//   visible: boolean;
//   onClose?: () => void;
//   location?: LocationType | null;
//   initialLocations?: (LocationType | null)[]; 
//   onLocationsChange?: (locations: (LocationType | null)[]) => void;
//   onSelectedLocationChange?: (location: LocationType | null) => void;
//   autoOpenSecond?: boolean;
// }