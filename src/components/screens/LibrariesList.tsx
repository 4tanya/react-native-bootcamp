import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../_base';
import LibrariesList from '../LibrariesList';

const LibrariesListScreen = () => {
  return (
    <View style={styles.container}>
      <LibrariesList />
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
