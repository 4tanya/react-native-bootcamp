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
    body?: Request['body'] | string;
    errorText?: string;
  }): Promise<T | undefined> => {
    try {
      const authHeader = token && {
        Authorization: `Bearer ${token}`,
      };

      const initHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...authHeader,
      };

      const rawResponse = await fetch(`${apiUrl}${endpoint}`, {
        method,
        headers: {
          ...initHeaders,
          ...headers,
        },
        body,
      });

      if (!rawResponse.ok) {
        this.handleError(rawResponse);
      }

      return await rawResponse.json();
    } catch (err) {
      Alert.alert('oh snap!', errorText || err);
    }
  };

  handleError = ({status}: Response) => {
    let message: string = 'Error';
    if (status >= 500) {
      message = 'Something went wrong';
    }
    if (status >= 400 && status < 500) {
      message = 'Try again';
    }
    throw new Error(message);
  };
}
