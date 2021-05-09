/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../_base';
import Category from '../Category';

const CategoryScreen = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Category
        id={route.params.id}
        onSelect={id => navigation.navigate('Book', {id})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
});

export default CategoryScreen;
