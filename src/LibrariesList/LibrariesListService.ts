import {Location} from 'react-native-get-location';
import BaseService from '../service';
import type {LibrariesData} from './models';

const getEndpoint = ({latitude: lat, longitude: lon}: Location): string =>
  `/libraries?latitude=${lat}&longitude=${lon}`;

export default class LibrariesListService extends BaseService {
  constructor() {
    super();
  }

  get = ({
    location,
    token,
  }: {
    location: Location;
    token: string;
  }): Promise<LibrariesData> => {
    const endpoint = getEndpoint(location);
    return this.request<LibrariesData>({endpoint, token});
  };
}
