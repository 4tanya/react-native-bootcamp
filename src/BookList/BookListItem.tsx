import React, {FC} from 'react';
import {BookItem} from './BookListProps';
import {RowItem, BoxItem} from '../components';

const BookListItem: FC<BookItem> = ({
  item: {name, author, takenDate, returnedDate, returnBefore},
}) => (
  <BoxItem>
    <RowItem title={'Name of the book:'} value={name} />
    <RowItem title={'Author:'} value={author} />
    <RowItem title={'Borrow date:'} value={takenDate} />
    {returnedDate ? (
      <RowItem title={'Returned date:'} value={returnedDate} />
    ) : (
      <RowItem title={'Return date:'} value={returnBefore} />
    )}
  </BoxItem>
);

export default BookListItem;
