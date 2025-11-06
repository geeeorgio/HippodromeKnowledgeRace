import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: wp(10),
    paddingTop: wp(20),
    justifyContent: 'space-between',
  },
  questionCard: {
    width: '100%',
    paddingTop: wp(16),
    paddingHorizontal: wp(6),
    paddingBottom: hp(6),
    gap: hp(20),
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(6),
    flexShrink: 0,
  },
  progressDot: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: COLORS.white,
  },
  progressDotActive: {
    backgroundColor: COLORS.blue,
  },
  questionText: {
    fontSize: sp(20),
    fontFamily: FONTS.RobotoItalic,
    textAlign: 'center',
    flexShrink: 1,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1.75,
    borderRadius: wp(7),
    overflow: 'hidden',
    flexShrink: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  optionsContainer: {
    width: '100%',
    gap: hp(18),
    flexShrink: 1,
    paddingHorizontal: wp(10),
  },
  confirmButton: {
    paddingVertical: hp(8),
    paddingHorizontal: wp(40),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(20),
    flexShrink: 0,
  },
  confirmButtonText: {
    fontSize: sp(18),
    fontFamily: FONTS.RobotoExtraBold,
  },
});
