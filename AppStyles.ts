import {StackNavigationOptions} from '@react-navigation/stack';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {colors} from './src/styles/_base';

export const screenOptions: StackNavigationOptions = {
  headerTintColor: colors.normalText,
  headerStyle: {
    height: 80,
    backgroundColor: colors.primary,
  },
  headerTitleStyle: {fontWeight: 'bold'},
};

export const drawerOptions: DrawerNavigationOptions = {
  ...(screenOptions as DrawerNavigationOptions),
  headerShown: true,
};
