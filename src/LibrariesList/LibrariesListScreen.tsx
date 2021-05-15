import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../styles/_base';
import LibrariesListComponent from './LibrariesListComponent';

const LibrariesListScreen = () => {
  return (
    <View style={styles.container}>
      <LibrariesListComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
});

export default LibrariesListScreen;
