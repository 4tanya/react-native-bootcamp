import {StyleSheet} from 'react-native';
import {paddings, colors} from '../styles/_base';

export default StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: paddings.sm,
  },
  error: {
    paddingLeft: paddings.md,
    paddingBottom: paddings.md,
    color: colors.danger,
  },
});
