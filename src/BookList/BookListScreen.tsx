import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../styles/_base';
import BookListComponent from './BookListComponent';

const BookListScreen = () => {
  return (
    <View style={styles.container}>
      <BookListComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
});

export default BookListScreen;
