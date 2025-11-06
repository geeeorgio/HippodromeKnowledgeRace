import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: wp(60),
    paddingTop: hp(111),
  },
  btnContainer: {
    flex: 0.58,
    width: '100%',
    justifyContent: 'flex-start',
    gap: hp(20),
  },
  btn: {
    width: '100%',
    paddingVertical: hp(12),
  },
  btnText: {
    fontSize: sp(22),
    fontFamily: FONTS.RobotoExtraBold,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 0.42,
    width: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
