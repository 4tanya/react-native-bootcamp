import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {BadgeRowProps} from './BadgeProps';

const BadgeRow: FC<BadgeRowProps> = ({title, value}) => {
  return (
    <View style={styles.textRow}>
      <Text style={styles.textKey}>{title}</Text>
      <Text style={styles.textValue}>{value}</Text>
    </View>
  );
};

export default BadgeRow;
