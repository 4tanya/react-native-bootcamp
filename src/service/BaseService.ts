import {apiUrl} from '../constants';
import {Alert} from 'react-native';

export default class BaseService {
  request = <T>({
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
  }): Promise<T> => {
    const authHeader = token && {
      Authorization: `Bearer ${token}`,
    };
    return fetch(`${apiUrl}${endpoint}`, {
      method,
      headers: {
        ...headers,
        ...authHeader,
      },
      body,
    })
      .then(res => res.json())
      .catch(err => {
        Alert.alert('oh snap!', errorText || err);
      });
  };
}
