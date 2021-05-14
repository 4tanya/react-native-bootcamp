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
    <View>
      <Loader loading={loading} />
      <FlatList
        data={data}
        keyExtractor={({isbn}) => isbn}
        renderItem={({
          item: {name, author, takenDate, returnedDate, returnBefore},
        }) => (
          <TouchableHighlight
            style={styles.listItem}
            underlayColor={colors.primary}>
            <View>
              <Text>
                name: <Text style={styles.textValue}>{name}</Text>
              </Text>
              <Text>
                author: <Text style={styles.textValue}>{author}</Text>
              </Text>
              <Text>
                borrow date : <Text style={styles.textValue}>{takenDate}</Text>
              </Text>
              {returnedDate && (
                <Text>
                  Returned date:{' '}
                  <Text style={styles.textValue}>{returnedDate}</Text>
                </Text>
              )}
              {!returnedDate && (
                <Text>
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
  listItem: {
    flex: 1,
    padding: paddings.md,
    backgroundColor: colors.background,
  },
});

export default BookList;
