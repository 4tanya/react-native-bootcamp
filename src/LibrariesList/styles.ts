import {StyleSheet, Dimensions} from 'react-native';
import {colors, paddings} from '../styles/_base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  map: {
    width: windowWidth,
    height: windowHeight,
    marginBottom: 1,
  },
  listItem: {
    flex: 1,
    padding: paddings.md,
    backgroundColor: colors.backgroundColor,

    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textValue: {
    fontSize: 15,
  },
});
