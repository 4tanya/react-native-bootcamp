import {createContext} from 'react';

export default createContext({
  userId: '',
  setUserId: (userId: string): void => {
    userId;
  },
  token: '',
  setToken: (token: string): void => {
    token;
  },
});
