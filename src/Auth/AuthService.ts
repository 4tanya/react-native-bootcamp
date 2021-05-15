import BaseService from '../service';
import {UserData} from './models';

const endpoint = '/login';

export default class AuthService extends BaseService {
  constructor() {
    super();
  }

  post = ({
    body,
    errorText,
  }: {
    body: string;
    errorText: string;
  }): Promise<UserData> => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return this.request<UserData>({
      endpoint,
      method: 'POST',
      headers,
      body,
      errorText,
    });
  };
}
