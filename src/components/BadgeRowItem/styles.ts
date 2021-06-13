import {StyleSheet} from 'react-native';
import {paddings, fonts, colors} from '../../styles/_base';

export default StyleSheet.create({
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 250,
  },
  textKey: {
    fontSize: fonts.md,
    fontWeight: 'bold',
    color: colors.titleColor,
    paddingTop: paddings.sm,
    paddingBottom: paddings.sm,
  },
  textValue: {
    fontSize: fonts.md,
    fontWeight: 'bold',
    color: colors.valueColor,
  },
});
