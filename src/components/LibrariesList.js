import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import {colors, paddings} from './_base';
import Loader from './common/Loader';
import {UserContext} from '../../App';

const LibrariesList = () => {
  const {token} = useContext(UserContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [location, setLocation] = useState(null);

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
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item: {name, address1, city, zipCode, country}}) => (
          <TouchableHighlight
            style={styles.listItem}
            underlayColor={colors.primary}>
            <View>
              <Text key={name}>
                Name: <Text style={styles.textValue}>{name}</Text>
              </Text>
              <Text key={address1}>
                Address: <Text style={styles.textValue}>{address1}</Text>
              </Text>
              <Text key={city}>
                City: <Text style={styles.textValue}>{city}</Text>
              </Text>
              <Text key={zipCode}>
                Zip Code: <Text style={styles.textValue}>{zipCode}</Text>
              </Text>
              <Text key={country}>
                Country: <Text style={styles.textValue}>{country}</Text>
              </Text>
            </View>
          </TouchableHighlight>
        )}
        ListFooterComponent={<Loader loading={loading} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: paddings.md,
    backgroundColor: colors.background,
  },
});

export default LibrariesList;
