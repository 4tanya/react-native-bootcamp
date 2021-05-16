import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BadgeRowItemProps from './BadgeRowItemProps';

const BadgeRowItem: FC<BadgeRowItemProps> = ({title, value}) => {
  return (
    <View style={styles.textRow}>
      <Text style={styles.textKey}>{title}</Text>
      <Text style={styles.textValue}>{value}</Text>
    </View>
  );
};

export default BadgeRowItem;
