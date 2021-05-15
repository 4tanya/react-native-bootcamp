import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../styles/_base';
import AuthComponent from './AuthComponent';

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <AuthComponent />
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
