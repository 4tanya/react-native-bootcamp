import 'react-native-gesture-handler';
import React, {useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {screenOptions, drawerOptions, drawerStyles} from './AppStyles';

import {UserContext} from './src/context';
import routesConfig, {RoutesName} from './src/routes';

import {DrawerContent} from './src/components';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const userContext = useContext(UserContext);
  const [userId, setUserId] = useState<string>(userContext.userId);
  const [token, setToken] = useState<string>(userContext.token);

  const value = {userId, setUserId, token, setToken};

  const signOut = () => {
    setUserId('');
    setToken('');
  };

  return (
    <UserContext.Provider value={value}>
      <NavigationContainer>
        {!token ? (
          <Stack.Navigator
            initialRouteName={RoutesName.AUTH}
            headerMode={'none'}
            screenOptions={screenOptions}>
            {routesConfig.landingRoutes.map(({name, component, title}) => (
              <Stack.Screen
                key={name}
                name={name}
                component={component}
                options={{
                  title: title,
                }}
              />
            ))}
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator
            initialRouteName={RoutesName.BADGE}
            screenOptions={drawerOptions}
            drawerStyle={drawerStyles}
            drawerContent={props => <DrawerContent {...{signOut, ...props}} />}>
            {routesConfig.appRoutes.map(({name, component, title}) => (
              <Drawer.Screen
                key={name}
                name={name}
                component={component}
                options={{
                  title: title,
                }}
              />
            ))}
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
