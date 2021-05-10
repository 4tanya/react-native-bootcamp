/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {createContext, useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {colors} from './src/components/_base';

import Auth from './src/components/screens/Auth';
import Badge from './src/components/screens/Badge';

import Categories from './src/components/screens/Categories';
import Category from './src/components/screens/Category';
import Book from './src/components/screens/Book';

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
                title: 'Badge',
              }}
            />
            <Drawer.Screen
              name="Categories"
              component={Categories}
              options={{
                title: 'Categories',
              }}
            />
            <Drawer.Screen
              name="Category"
              component={Category}
              options={{
                title: 'Category',
              }}
            />
            <Drawer.Screen
              name="Book"
              component={Book}
              options={{
                title: 'Book',
              }}
            />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
