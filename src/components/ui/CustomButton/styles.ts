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
    opacity: 0.8,
  },
  btnDisabled: {
    backgroundColor: COLORS.rgbaPurpleBtn,
  },
  white: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.borderColor,
    borderWidth: wp(1),
  },
  purple: {
    backgroundColor: COLORS.purpleContainer,
    borderColor: COLORS.borderColor,
    borderWidth: wp(1),
  },
  green: {
    backgroundColor: COLORS.green,
  },
  red: {
    backgroundColor: COLORS.red,
  },
});
