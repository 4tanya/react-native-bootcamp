export interface Book {
  isbn: string;
  name: string;
  author: string;
  takenDate: string;
  returnedDate: string;
  returnBefore: string;
}

export default interface BookListProps {
  books: Array<Book>;
}
