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
  }): Promise<BookListProps> => {
    const endpoint = getEndpoint(userId);
    return this.request<BookListProps>({endpoint, token});
  };
}
