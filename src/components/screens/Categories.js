/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {colors} from '../_base';

const CategoriesScreen: () => Node = () => {
  return (
    <View style={styles.container}>
      <Text>The categories screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
});

export default CategoriesScreen;
