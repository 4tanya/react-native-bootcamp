import BaseService from '../service';
import {UserData} from './models';

const endpoint = '/login';

export default class AuthService extends BaseService {
  constructor() {
    super();
  }

  post = ({body, errorText}: {body: string; errorText: string}) => {
    return this.request<UserData | undefined>({
      endpoint,
      method: 'POST',
      body,
      errorText,
    });
  };
}
