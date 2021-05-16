import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  map: {
    width: windowWidth,
    height: windowHeight,
    marginBottom: 1,
  },
});
