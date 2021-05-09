import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from 'react-native';
import {colors, paddings} from './_base';
import Loader from './common/Loader';

const Categories = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://acamicaexample.herokuapp.com/categories')
      .then(resp => resp.json())
      .then(data => setData(data))
      .catch(err => {
        Alert.alert('oh snap!', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.listContainer}>
      <Loader loading={loading} />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableHighlight
            style={styles.listItem}
            underlayColor={colors.primary}
            onPress={() => {
              console.log('pressed');
            }}>
            <Text>{item.name}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: paddings.lg,
  },
  listItem: {
    flex: 1,
    padding: paddings.md,
    backgroundColor: colors.background,
  },
});

export default Categories;
