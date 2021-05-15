interface Book {
  isbn: string;
  name: string;
  author: string;
  takenDate: string;
  returnedDate: string;
  returnBefore: string;
}

export type BookListProps = Array<Book>;
