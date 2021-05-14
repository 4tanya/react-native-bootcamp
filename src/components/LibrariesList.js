import React, {useState, useEffect, useContext} from 'react';
import {View, Alert} from 'react-native';
import GetLocation from 'react-native-get-location';
import {UserContext} from '../../App';
import LibrariesListView from './LibrariesListView';
import LibrariesMapView from './LibrariesMapView';

const LibrariesList = () => {
  const {token} = useContext(UserContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState();

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
    if (!location) return;

    const {latitude: lat, longitude: lon} = location;

    setLoading(true);
    fetch(
      `https://rn-bootcamp2021.mocklab.io/v1/libraries?latitude=${lat}&longitude=${lon}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then(resp => resp.json())
      .then(({libraries}) => setData(libraries))
      .catch(err => {
        Alert.alert('oh snap!', err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    loadItems();
  }, [location]);

  return (
    <View>
      <LibrariesListView data={data} loading={loading} />
      <LibrariesMapView data={data} loading={loading} location={location} />
    </View>
  );
};

export default LibrariesList;
