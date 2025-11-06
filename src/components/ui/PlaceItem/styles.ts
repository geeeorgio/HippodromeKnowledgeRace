import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: wp(4),
    padding: wp(10),
    minHeight: hp(115),
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(7),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: wp(10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
