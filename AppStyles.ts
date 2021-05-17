import {StackNavigationOptions} from '@react-navigation/stack';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {colors, paddings} from './src/styles/_base';

export const screenOptions: StackNavigationOptions = {
  headerTintColor: colors.headerColor,
  headerStyle: {
    height: 80,
    backgroundColor: colors.headerBackground,
  },
  headerTitleStyle: {fontWeight: 'bold'},
};

export const drawerOptions: DrawerNavigationOptions = {
  ...(screenOptions as DrawerNavigationOptions),
  headerShown: true,
};

export const drawerStyles = {
  backgroundColor: colors.drawerBackground,
  padding: paddings.md,
};
