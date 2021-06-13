import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../styles/_base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  map: {
    width: windowWidth,
    height: windowHeight,
    marginBottom: 1,
  },
  tabBar: {
    backgroundColor: colors.backgroundColor,
  },
  tabTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabTitleList: {
    color: colors.tabTitleListColor,
  },
  tabTitleMap: {
    color: colors.tabTitleMapColor,
  },
});
