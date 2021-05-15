import React, {useState, useEffect, useContext, FC} from 'react';
import {View, Text, FlatList, TouchableHighlight} from 'react-native';
import {colors} from '../styles/_base';
import {Loader} from '../components';
import {UserContext} from '../context';
import BookListProps, {Book} from './BookListProps';
import styles from './styles';
import BookListService from './BookListService';

const BookListComponent: FC = () => {
  const {userId, token} = useContext(UserContext);

  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const service = new BookListService();

  const loadData = async () => {
    try {
      const {books} = (await service.get({userId, token})) as BookListProps;
      setData(books);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
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
                Name of the book: <Text style={styles.textValue}>{name}</Text>
              </Text>
              <Text>
                Author: <Text style={styles.textValue}>{author}</Text>
              </Text>
              <Text>
                Borrow date : <Text style={styles.textValue}>{takenDate}</Text>
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

export default BookListComponent;
