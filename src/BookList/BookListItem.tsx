import React, {FC} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {colors} from '../styles/_base';
import {BookItem} from './BookListProps';
import styles from './styles';

const BookListItem: FC<BookItem> = ({
  item: {name, author, takenDate, returnedDate, returnBefore},
}) => (
  <TouchableHighlight style={styles.listItem} underlayColor={colors.primary}>
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
          Returned date: <Text style={styles.textValue}>{returnedDate}</Text>
        </Text>
      )}
      {!returnedDate && (
        <Text>
          Return date: <Text style={styles.textValue}>{returnBefore}</Text>
        </Text>
      )}
    </View>
  </TouchableHighlight>
);

export default BookListItem;
