import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
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
  const {
    id,
    limit = 15,
    disableInfiniteScroll,
    page: pageProp,
    onSelect,
  } = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [page, setPage] = useState(pageProp || 1);
  const [noMoreData, setNoMoreData] = useState(disableInfiniteScroll);

  const loadItems = () => {
    setLoading(true);
    fetch(
      `https://acamicaexample.herokuapp.com/books?category_id=${id}&_page=${page}&_limit=${limit}`,
    )
      .then(resp => resp.json())
      .then(dataFromServer => {
        setData([...data, ...dataFromServer]);
        setNoMoreData(disableInfiniteScroll || dataFromServer.length < limit);
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
    loadItems();
  }, []);

  useEffect(() => {
    !loading && !noMoreData && loadItems();
  }, [page]);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableHighlight
            style={styles.listItem}
            underlayColor={colors.primary}
            onPress={() => onSelect(item.id)}>
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

Category.propTypes = {
  id: PropTypes.string.isRequired,
  limit: PropTypes.number,
  disableInfiniteScroll: PropTypes.bool,
  page: PropTypes.number,
  onSelect: PropTypes.func,
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: paddings.md,
    backgroundColor: colors.background,
  },
});

export default Category;
