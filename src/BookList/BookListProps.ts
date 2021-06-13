export interface Book {
  isbn: string;
  name: string;
  author: string;
  takenDate: string;
  returnedDate: string;
  returnBefore: string;
}

export interface BookItem {
  item: Book;
}

export enum BookStatusTitle {
  RETURNED = 'Returned',
  NOT_RETURNED = 'Active',
}

export interface FilteredBookItem {
  title: BookStatusTitle;
  data: Book[];
}

export default interface BookListProps {
  books: Array<Book>;
}
