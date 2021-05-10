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

import {colors} from './src/components/_base';

import Auth from './src/components/screens/Auth';
import Badge from './src/components/screens/Badge';

import Categories from './src/components/screens/Categories';
import Category from './src/components/screens/Category';
import Book from './src/components/screens/Book';

const Stack = createStackNavigator();

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

  return (
    <UserContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={!token ? 'Auth' : 'Badge'}
          headerMode="screen"
          screenOptions={{
            headerTintColor: colors.normalText,
            headerStyle: {
              height: 80,
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
          {!token ? (
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{
                title: 'Auth',
              }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Badge"
                component={Badge}
                options={{
                  title: 'Badge',
                }}
              />
              <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                  title: 'Categories',
                }}
              />
              <Stack.Screen
                name="Category"
                component={Category}
                options={{
                  title: 'Category',
                }}
              />
              <Stack.Screen
                name="Book"
                component={Book}
                options={{
                  title: 'Book',
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
