import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(40),
  },
  dialog: {
    padding: wp(24),
    gap: hp(20),
    minWidth: wp(280),
  },
  title: {
    fontSize: sp(20),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
  },
  message: {
    fontSize: sp(16),
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'center',
    lineHeight: sp(22),
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: wp(16),
    justifyContent: 'space-between',
    marginTop: hp(10),
  },
  button: {
    flex: 1,
    paddingVertical: hp(12),
    paddingHorizontal: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    fontSize: sp(16),
    fontFamily: FONTS.RobotoBold,
  },
  cancelText: {
    fontSize: sp(16),
    fontFamily: FONTS.RobotoBold,
  },
});
