import {StyleSheet} from 'react-native';
import {colors, paddings} from '../styles/_base';

export default StyleSheet.create({
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
    fontSize: 16,
  },
});
