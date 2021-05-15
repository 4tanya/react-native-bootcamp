import {FC} from 'react';

enum RoutesName {
  AUTH = 'Auth',
  BADGE = 'Badge',
  BOOK_LIST = 'BookList',
  LIBRARIES_LIST = 'LibrariesList',
}

enum RoutesTitle {
  AUTH = 'Auth',
  BADGE = 'My badge ID',
  BOOK_LIST = 'Book history',
  LIBRARIES_LIST = 'Look for libraries',
}

interface Route {
  name: RoutesName;
  component: FC;
  title: RoutesTitle;
}

interface RoutesConfig {
  loggingRoutes: Route[];
  landingRoutes: Route[];
}

export {RoutesName, RoutesTitle};
export type {Route, RoutesConfig};
