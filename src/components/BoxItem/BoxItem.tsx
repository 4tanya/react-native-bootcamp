import React, {FC} from 'react';
import {View, TouchableHighlight} from 'react-native';
import styles from './styles';

const BoxItem: FC = ({children}) => (
  <TouchableHighlight style={styles.listItem}>
    <View>{children}</View>
  </TouchableHighlight>
);

export default BoxItem;
