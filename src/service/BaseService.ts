import {apiUrl} from '../constants';
import {Alert} from 'react-native';

export default class BaseService {
  request = async <T>({
    endpoint,
    token,
    method = 'GET',
    headers,
    body,
    errorText,
  }: {
    endpoint: string;
    token?: string;
    method?: Request['method'];
    headers?: Request['headers'];
    body?: Request['body'];
    errorText?: string;
  }): Promise<T | undefined> => {
    try {
      const authHeader = token && {
        Authorization: `Bearer ${token}`,
      };

      const rawResponse = await fetch(`${apiUrl}${endpoint}`, {
        method,
        headers: {
          ...headers,
          ...authHeader,
        },
        body,
      });

      if (!rawResponse.ok) {
        throw new Error();
      }

      const response = await rawResponse.json();
      return response;
    } catch (err) {
      this.handleError(errorText || err);
    }
  };

  handleError = (message: string) => {
    Alert.alert('oh snap!', message);
  };
}
