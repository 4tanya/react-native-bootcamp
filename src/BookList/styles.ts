import {StyleSheet} from 'react-native';
import {colors} from '../styles/_base';

export default StyleSheet.create({
  textValue: {
    fontSize: 16,
    marginLeft: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
  returned: {
    color: colors.returnedColor,
  },
  notReturned: {
    color: colors.notReturnedColor,
  },
});
