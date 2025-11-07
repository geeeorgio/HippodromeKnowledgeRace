import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(30),
  },
  scrollContent: {
    width: '100%',
    paddingTop: hp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  trophyContainer: {
    width: '100%',
    aspectRatio: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trophy: {
    width: '100%',
    height: '100%',
  },
  resultCard: {
    padding: wp(10),
    gap: hp(10),
    width: '100%',
  },
  title: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(16),
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: wp(80),
    gap: hp(18),
    justifyContent: 'space-between',
  },
  button: {
    width: '100%',
    paddingVertical: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoExtraBold,
  },
});
