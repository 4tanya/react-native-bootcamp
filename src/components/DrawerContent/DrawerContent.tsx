import React, {FC} from 'react';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DrawerContentProps from './DrawerContentProps';
import styles from './styles';

const DrawerContent: FC<DrawerContentProps> = ({signOut, ...props}) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} labelStyle={styles.label} />
    <DrawerItem label="Sign Out" onPress={signOut} labelStyle={styles.button} />
  </DrawerContentScrollView>
);

export default DrawerContent;
