import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(20),
    padding: wp(10),
  },
  scrollViewContent: {
    gap: hp(8),
    marginBottom: hp(20),
  },
  title: {
    fontSize: sp(17),
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1.75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(7),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: wp(7),
  },
  imageText: {
    fontSize: sp(14),
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'center',
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
