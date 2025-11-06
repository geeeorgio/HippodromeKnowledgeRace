import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    padding: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: sp(15),
    fontFamily: FONTS.RobotoExtraBold,
    textAlign: 'center',
  },
});
