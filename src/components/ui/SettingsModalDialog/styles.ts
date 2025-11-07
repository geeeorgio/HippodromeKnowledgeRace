import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  dialog: {
    padding: wp(12),
    gap: hp(10),
    minWidth: wp(280),
  },
  title: {
    fontSize: sp(22),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(20),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(16),
    paddingHorizontal: wp(24),
    justifyContent: 'space-evenly',
    marginTop: hp(18),
  },
  button: {
    flex: 1,
    paddingVertical: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: sp(16),
    fontFamily: FONTS.RobotoBold,
  },
  confirmText: {
    fontSize: sp(16),
    fontFamily: FONTS.RobotoBold,
  },
});
