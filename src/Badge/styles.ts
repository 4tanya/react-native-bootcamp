import {StyleSheet} from 'react-native';
import {paddings, fonts, colors} from '../styles/_base';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: paddings.lg,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 250,
  },
  textKey: {
    fontSize: fonts.md,
    color: colors.titleColor,
    paddingTop: paddings.sm,
    paddingBottom: paddings.sm,
  },
  textValue: {
    fontSize: fonts.md,
    color: colors.valueColor,
  },
  qrcode: {
    alignItems: 'center',
    paddingTop: paddings.lg,
    paddingBottom: paddings.lg,
  },
});
