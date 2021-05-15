import React, {useState, useEffect, useContext, FC} from 'react';
import {Alert, useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import GetLocation, {Location} from 'react-native-get-location';
import {UserContext} from '../context';
import LibrariesListView from './LibrariesListView';
import LibrariesMapView from './LibrariesMapView';
import type {LibrariesList, RouteTab} from './models';
import {RoutesKey, RoutesTitle} from './models';
import LibrariesListService from './LibrariesListService';

const LibrariesListComponent: FC = () => {
  const layout = useWindowDimensions();

  const {token} = useContext(UserContext);

  const [data, setData] = useState<LibrariesList>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<Location>();

  const service = new LibrariesListService();

  /** tabs */
  const [index, setIndex] = useState(0);
  const [routes] = useState<RouteTab[]>([
    {key: RoutesKey.LIST, title: RoutesTitle.LIST},
    {key: RoutesKey.MAP, title: RoutesTitle.MAP},
  ]);

  const renderScene = ({route: {key}}: {route: RouteTab}) => {
    switch (key) {
      case RoutesKey.LIST:
        return <LibrariesListView data={data} loading={loading} />;
      case RoutesKey.MAP:
        return (
          <LibrariesMapView data={data} loading={loading} location={location} />
        );
    }
  };
  /** tabs */

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(locationFromServer => setLocation(locationFromServer))
      .catch(error => {
        const {code, message} = error;
        Alert.alert(code, message);
      });
  };

  const loadItems = () => {
    setLoading(true);
    service
      .get({location, token})
      .then(({libraries}) => setData(libraries))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    location && loadItems();
  }, [location]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default LibrariesListComponent;
