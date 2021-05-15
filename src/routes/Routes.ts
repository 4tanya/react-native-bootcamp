import {RoutesName, RoutesTitle, RoutesConfig} from './models';

import Auth from '../Auth';

import Badge from '../Badge';
import BookList from '../BookList';
import LibrariesList from '../LibrariesList';

const routesConfig: RoutesConfig = {
  loggingRoutes: [
    {
      name: RoutesName.AUTH,
      component: Auth,
      title: RoutesTitle.AUTH,
    },
  ],
  landingRoutes: [
    {
      name: RoutesName.BADGE,
      component: Badge,
      title: RoutesTitle.BADGE,
    },
    {
      name: RoutesName.BOOK_LIST,
      component: BookList,
      title: RoutesTitle.BOOK_LIST,
    },
    {
      name: RoutesName.LIBRARIES_LIST,
      component: LibrariesList,
      title: RoutesTitle.LIBRARIES_LIST,
    },
  ],
};

export default routesConfig;
