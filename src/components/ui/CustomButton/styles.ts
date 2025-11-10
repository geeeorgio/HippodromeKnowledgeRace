import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(12),
  },
  btnPressed: {
    opacity: 0.5,
  },
  btnDisabled: {
    backgroundColor: '#333333',
    borderRadius: wp(12),
  },
  blue: {
    backgroundColor: COLORS.axiantBlue,
    borderColor: COLORS.borderColor,
    borderWidth: wp(1),
    borderRadius: wp(12),
  },
  white: {
    backgroundColor: COLORS.axiantBlue,
    borderColor: COLORS.white,
    borderWidth: wp(1),
    borderRadius: wp(12),
  },
  purple: {
    backgroundColor: COLORS.axiantBlue,
    borderColor: COLORS.borderColor,
    borderWidth: wp(1),
    borderRadius: wp(12),
  },
  green: {
    backgroundColor: COLORS.green,
    borderRadius: wp(12),
  },
  red: {
    backgroundColor: COLORS.wrongRed,
    borderRadius: wp(12),
  },
  purpleOpacity: {
    backgroundColor: COLORS.axiantBlueOpacity,
    borderRadius: wp(12),
  },
  selected: {
    backgroundColor: COLORS.axiantBlueOpacitySelected,
    borderRadius: wp(12),
  },
});
