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
    backgroundColor: COLORS.rgbaPurpleBtn,
    borderRadius: wp(12),
  },
  blue: {
    backgroundColor: COLORS.purpleBtn,
    borderColor: COLORS.borderColor,
    borderWidth: wp(1),
    borderRadius: wp(12),
  },
  white: {
    backgroundColor: COLORS.purpleContainer,
    borderColor: COLORS.white,
    borderWidth: wp(1),
    borderRadius: wp(12),
  },
  purple: {
    backgroundColor: COLORS.purpleContainer,
    borderColor: COLORS.borderColor,
    borderWidth: wp(1),
    borderRadius: wp(12),
  },
  green: {
    backgroundColor: COLORS.green,
    borderRadius: wp(12),
  },
  red: {
    backgroundColor: COLORS.red,
    borderRadius: wp(12),
  },
  purpleOpacity: {
    backgroundColor: COLORS.rgbaPurple,
    borderRadius: wp(12),
  },
  selected: {
    backgroundColor: COLORS.purpleContainer,
    borderRadius: wp(12),
  },
});
