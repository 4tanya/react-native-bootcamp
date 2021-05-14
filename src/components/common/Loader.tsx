import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {colors, paddings} from '../_base';

const Loader = ({loading}) => {
  return (
    loading && (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    padding: paddings.md,
  },
});

export default Loader;
