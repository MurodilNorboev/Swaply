declare module 'react-native-maps' {
  import * as React from 'react';
  import { ViewProps } from 'react-native';

  export interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }

  export interface MapViewProps extends ViewProps {
    initialRegion?: Region;
    region?: Region;
    onPress?: (event: any) => void;
  }

  export class Marker extends React.Component<any> {}
  export class Circle extends React.Component<any> {}
  export class Polygon extends React.Component<any> {}
  export class UrlTile extends React.Component<any> {}
  export default class MapView extends React.Component<MapViewProps> {
      static Polygon: any;
      animateToRegion(newRegion: Region, duration: number): void;
  }
}
