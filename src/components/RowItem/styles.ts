import {StyleSheet} from 'react-native';
import {paddings, fonts} from '../../styles/_base';

export default StyleSheet.create({
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textKey: {
    fontWeight: 'bold',
    fontSize: fonts.sm,
    paddingTop: paddings.sm,
    paddingBottom: paddings.sm,
  },
  textValue: {
    fontSize: fonts.sm,
  },
});
