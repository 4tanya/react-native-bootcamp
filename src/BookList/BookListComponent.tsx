import React, {useState, useEffect, useContext, FC} from 'react';
import {View, Text, SectionList} from 'react-native';
import {Loader} from '../components';
import {UserContext} from '../context';
import BookListProps, {
  Book,
  FilteredBookItem,
  BookStatusTitle,
} from './BookListProps';
import styles from './styles';
import BookListService from './BookListService';
import BookListItem from './BookListItem';
import {colors} from '../styles/_base';

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

  const filterBooks = (books: Book[]): FilteredBookItem[] => {
    return books.reduce(
      (res, book) => {
        if (book.returnedDate) {
          res[1].data = [...res[1].data, book];
        } else {
          res[0].data = [...res[0].data, book];
        }

        return res;
      },
      [
        {title: BookStatusTitle.NOT_RETURNED, data: [] as Book[]},
        {title: BookStatusTitle.RETURNED, data: [] as Book[]},
      ],
    );
  };

  return (
    <View>
      <Loader loading={loading} />
      <SectionList
        sections={filterBooks(data)}
        keyExtractor={({isbn}) => isbn}
        renderItem={({item}) => <BookListItem item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text
            style={[
              styles.textValue,
              title === BookStatusTitle.RETURNED
                ? styles.returned
                : styles.notReturned,
            ]}>
            {title}
          </Text>
        )}
      />
    </View>
  );
};

export default BookListComponent;
