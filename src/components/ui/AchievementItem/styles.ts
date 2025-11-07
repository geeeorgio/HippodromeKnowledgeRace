import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: sp(12),
    fontFamily: FONTS.RobotoMedium,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(9),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
  },
});
