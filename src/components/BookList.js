import React, {useState, useEffect, useContext} from 'react';
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
import {UserContext} from '../../App';

const BookList = () => {
  const {userId, token} = useContext(UserContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rn-bootcamp2021.mocklab.io/v1/members/${userId}/books`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(resp => resp.json())
      .then(({books}) => setData(books))
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
        renderItem={({
          item: {name, author, takenDate, returnedDate, returnBefore, isbn},
        }) => (
          <TouchableHighlight
            style={styles.listItem}
            underlayColor={colors.primary}
            key={isbn}>
            <View>
              <Text key={name}>
                name: <Text style={styles.textValue}>{name}</Text>
              </Text>
              <Text key={author}>
                author: <Text style={styles.textValue}>{author}</Text>
              </Text>
              <Text key={takenDate}>
                borrow date : <Text style={styles.textValue}>{takenDate}</Text>
              </Text>
              {returnedDate && (
                <Text key={returnedDate}>
                  Returned date:{' '}
                  <Text style={styles.textValue}>{returnedDate}</Text>
                </Text>
              )}
              {!returnedDate && (
                <Text key={returnBefore}>
                  Return date:{' '}
                  <Text style={styles.textValue}>{returnBefore}</Text>
                </Text>
              )}
            </View>
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

export default BookList;
