import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../_base';
import Categories from '../Categories';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Categories
        onSelect={id => {
          navigation.navigate('Category', {id});
        }}
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

export default CategoriesScreen;
