import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(5),
    padding: wp(5),
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: sp(15),
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(11),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
  },
});
