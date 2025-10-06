export type LocationType = {
    latitude: number;
    longitude: number;
    name: string;
  } | null;
  export type Props = {
    visible: boolean;
    onClose: () => void;
    location: LocationType;
  };