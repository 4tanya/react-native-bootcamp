import {StyleSheet} from 'react-native';
import {paddings, colors} from '../styles/_base';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  iconInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: paddings.sm,
  },
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
