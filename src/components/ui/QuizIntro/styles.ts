import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(10),
    paddingTop: wp(50),
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  card: {
    padding: wp(16),
    marginBottom: hp(20),
    gap: hp(16),
  },
  title: {
    fontSize: sp(20),
    fontFamily: FONTS.RobotoExtraBold,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
  },
  startButton: {
    paddingVertical: hp(6),
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: hp(22),
  },
  buttonText: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoExtraBold,
  },
});
