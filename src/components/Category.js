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

const Category = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [page, setPage] = useState(1);
  const [noMoreData, setNoMoreData] = useState(false);
  const limit = 10;

  const loadItems = () => {
    setLoading(true);
    fetch(
      `https://acamicaexample.herokuapp.com/books?category_id=0&_page=${page}&_limit=${limit}`,
    )
      .then(resp => resp.json())
      .then(dataFromServer => {
        setData([...data, ...dataFromServer]);
        setNoMoreData(dataFromServer.length < limit);
      })
      .catch(err => {
        Alert.alert('oh snap!', err);
      })
      .finally(() => setLoading(false));
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    !loading && !noMoreData && loadItems();
  }, [page]);

  return (
    <View style={styles.listContainer}>
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
        onEndReached={loadMore}
        onEndReachedThreshold={0.01}
        ListFooterComponent={<Loader loading={loading} />}
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

export default Category;
