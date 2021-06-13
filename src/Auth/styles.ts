import {StyleSheet} from 'react-native';
import {paddings, colors} from '../styles/_base';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    color: colors.logoColor,
    textAlign: 'center',
  },
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
  icon: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
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
    color: colors.errorColor,
  },
  button: {
    backgroundColor: colors.buttonBackground,
    color: colors.buttonColor,
    borderColor: colors.buttonBorder,

    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
