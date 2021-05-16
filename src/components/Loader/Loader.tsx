import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {colors} from '../../styles/_base';
import LoaderProps from './LoaderProps';
import styles from './styles';

const Loader: FC<LoaderProps> = ({loading}) =>
  loading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.loaderColor} />
    </View>
  ) : null;

export default Loader;
