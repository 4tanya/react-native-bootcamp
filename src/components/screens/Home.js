/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {colors} from '../_base';
import Category from '../Category';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Check the categories"
        onPress={() => navigation.navigate('Categories')}
      />
      <Category
        id={'0'}
        limit={3}
        disableInfiniteScroll
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

export default HomeScreen;
