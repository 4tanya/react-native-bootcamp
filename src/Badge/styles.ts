import {StyleSheet} from 'react-native';
import {paddings, fonts} from '../styles/_base';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: paddings.md,
  },
  textValue: {
    fontSize: fonts.lg,
  },
});
