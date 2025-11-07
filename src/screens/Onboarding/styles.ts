import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 0.65,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  image: {
    width: '90%',
    height: '90%',
  },
  contentContainer: {
    flex: 0.35,
    width: '100%',
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: hp(33),
    alignItems: 'center',
    marginBottom: hp(22),
    gap: hp(16),
  },
  title: {
    fontSize: sp(21),
    fontFamily: FONTS.RobotoExtraBold,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(17),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
  },
  button: {
    width: '33%',
    paddingVertical: hp(5),
    marginBottom: hp(20),
  },
  buttonText: {
    fontSize: sp(17),
    fontFamily: FONTS.RobotoExtraBold,
    textAlign: 'center',
  },
});
