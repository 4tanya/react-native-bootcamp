import BaseService from '../service';
import BookListProps from './BookListProps';

const getEndpoint = (userId: string): string => `/members/${userId}/books`;

export default class BookListService extends BaseService {
  constructor() {
    super();
  }

  get = ({
    userId,
    token,
  }: {
    userId: string;
    token: string;
  }): Promise<BookListProps | undefined> => {
    const endpoint = getEndpoint(userId);
    return this.request<BookListProps | undefined>({endpoint, token});
  };
}
