import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../_base';
import BookList from '../BookList';

const BookListScreen = () => {
  return (
    <View style={styles.container}>
      <BookList />
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
