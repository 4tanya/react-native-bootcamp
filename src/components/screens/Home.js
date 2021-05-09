/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {colors} from '../_base';

import Book from '../Book';
import Category from '../Category';

const HomeScreen: () => Node = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Check the categories"
        onPress={() => navigation.navigate('Categories')}
      />
      <Category />
      {/* <Book
        author={'Charles D.'}
        image={'https://placehold.it/60*90/'}
        description={'Lorem Ipsum'}
        url={'https://www.amazon.com/'}
      /> */}
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
