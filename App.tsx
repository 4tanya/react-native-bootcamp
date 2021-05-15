import 'react-native-gesture-handler';
import React, {useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screenOptions, drawerOptions} from './AppStyles';

import {UserContext} from './src/context';

import Auth from './src/Auth';

import Badge from './src/Badge';
import BookList from './src/BookList';
import LibrariesList from './src/LibrariesList';

import {RoutesName, RoutesTitle} from './AppModels';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const userContext = useContext(UserContext);
  const [userId, setUserId] = useState<string>(userContext.userId);
  const [token, setToken] = useState<string>(userContext.token);

  const value = {userId, setUserId, token, setToken};

  return (
    <UserContext.Provider value={value}>
      <NavigationContainer>
        {!token ? (
          <Stack.Navigator
            initialRouteName={RoutesName.AUTH}
            headerMode="screen"
            screenOptions={screenOptions}>
            <Stack.Screen
              name={RoutesName.AUTH}
              component={Auth}
              options={{
                title: RoutesTitle.AUTH,
              }}
            />
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator
            initialRouteName={RoutesName.BADGE}
            screenOptions={drawerOptions}>
            <Drawer.Screen
              name={RoutesName.BADGE}
              component={Badge}
              options={{
                title: RoutesTitle.BADGE,
              }}
            />
            <Drawer.Screen
              name={RoutesName.BOOK_LIST}
              component={BookList}
              options={{
                title: RoutesTitle.BOOK_LIST,
              }}
            />
            <Drawer.Screen
              name={RoutesName.LIBRARIES_LIST}
              component={LibrariesList}
              options={{
                title: RoutesTitle.LIBRARIES_LIST,
              }}
            />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
