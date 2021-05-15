import React, {FC} from 'react';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DrawerContentProps from './DrawerContentProps';

const DrawerContent: FC<DrawerContentProps> = ({signOut, ...props}) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem label="Sign Out" onPress={signOut} />
  </DrawerContentScrollView>
);

export default DrawerContent;
