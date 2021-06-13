import React, {useState, useEffect, useContext, FC} from 'react';
import {Alert, useWindowDimensions, Text} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import GetLocation, {Location} from 'react-native-get-location';
import {UserContext} from '../context';
import LibrariesListView from './LibrariesListView';
import LibrariesMapView from './LibrariesMapView';
import type {LibrariesList, RouteTab} from './models';
import {RoutesKey, RoutesTitle} from './models';
import LibrariesListService from './LibrariesListService';
import styles from './styles';

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

  const getLocation = async () => {
    try {
      const locationFromServer = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });

      setLocation(locationFromServer);
    } catch (error) {
      const {code, message} = error;
      Alert.alert(code, message);
    }
  };

  const loadItems = async () => {
    try {
      const {libraries} = await service.get({
        location,
        token,
      });

      setData(libraries);
    } finally {
      setLoading(false);
    }
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
      renderTabBar={props => (
        <TabBar
          {...props}
          style={styles.tabBar}
          renderLabel={({route: {key, title}}) => (
            <Text
              style={[
                styles.tabTitle,
                key === RoutesKey.LIST
                  ? styles.tabTitleList
                  : styles.tabTitleMap,
              ]}>
              {title}
            </Text>
          )}
        />
      )}
    />
  );
};

export default LibrariesListComponent;
