import {Location} from 'react-native-get-location';

interface Library {
  id: string;
  name: string;
  address1: string;
  city: string;
  zipCode: string;
  country: string;
  latitude: string;
  longitude: string;
}

type LibrariesList = Library[];

interface ListViewProps {
  data: LibrariesList;
  loading: boolean;
}

interface MapViewProps extends ListViewProps {
  location: Location;
}

enum RoutesKey {
  LIST = 'list',
  MAP = 'map',
}

enum RoutesTitle {
  LIST = 'List view',
  MAP = 'Map view',
}

export interface RouteTab {
  key: RoutesKey;
  title: RoutesTitle;
}

export type {LibrariesList, RouteTab, Library, ListViewProps, MapViewProps};
export {RoutesKey, RoutesTitle};
