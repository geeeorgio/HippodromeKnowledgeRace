import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: hp(50),
    paddingHorizontal: wp(20),
  },
  backButton: {
    width: wp(35),
    height: hp(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: sp(20),
    fontFamily: FONTS.RobotoExtraBold,
    textAlign: 'center',
  },
  sortButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
