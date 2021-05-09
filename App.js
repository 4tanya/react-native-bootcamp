/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {colors} from './src/components/_base';

import Home from './src/components/screens/Home';
import Categories from './src/components/screens/Categories';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTintColor: colors.normalText,
          headerStyle: {
            height: 80,
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            title: 'Categories',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
