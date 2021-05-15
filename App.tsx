import 'react-native-gesture-handler';
import React, {createContext, useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {colors} from './src/styles/_base';

import Auth from './src/Auth';

import Badge from './src/Badge';
import BookList from './src/BookList';
import LibrariesList from './src/LibrariesList';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const UserContext = createContext({
  userId: null,
  setUserId: () => {},
  token: null,
  setToken: () => {},
});

export default function StackNavigator() {
  const userContext = useContext(UserContext);
  const [userId, setUserId] = useState(userContext.userId);
  const [token, setToken] = useState(userContext.token);

  const value = {userId, setUserId, token, setToken};

  const screenOptions = {
    headerTintColor: colors.normalText,
    headerStyle: {
      height: 80,
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {fontWeight: 'bold'},
  };

  return (
    <UserContext.Provider value={value}>
      <NavigationContainer>
        {!token ? (
          <Stack.Navigator
            initialRouteName={'Auth'}
            headerMode="screen"
            screenOptions={screenOptions}>
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{
                title: 'Auth',
              }}
            />
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator
            initialRouteName={'Badge'}
            headerMode="screen"
            screenOptions={{
              ...screenOptions,
              headerShown: true,
            }}>
            <Drawer.Screen
              name="Badge"
              component={Badge}
              options={{
                title: 'My badge ID',
              }}
            />
            <Drawer.Screen
              name="BookList"
              component={BookList}
              options={{
                title: 'Book history',
              }}
            />
            <Drawer.Screen
              name="LibrariesList"
              component={LibrariesList}
              options={{
                title: 'Look for libraries',
              }}
            />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
