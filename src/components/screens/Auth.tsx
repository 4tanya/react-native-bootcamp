import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../_base';
import Auth from '../Auth';

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Auth />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
});

export default AuthScreen;
