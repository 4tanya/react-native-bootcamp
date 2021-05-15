import BaseService from '../service';
import BadgeProps from './BadgeProps';

const getEndpoint = (userId: string): string => `/members/${userId}`;

export default class BadgeService extends BaseService {
  constructor() {
    super();
  }

  get = ({
    userId,
    token,
  }: {
    userId: string;
    token: string;
  }): Promise<BadgeProps> => {
    const endpoint = getEndpoint(userId);
    return this.request<BadgeProps>({endpoint, token});
  };
}
