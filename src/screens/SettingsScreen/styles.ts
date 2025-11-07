import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';
import { hp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    padding: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: sp(22),
    fontFamily: FONTS.RobotoBold,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    gap: hp(20),
    paddingVertical: hp(20),
  },
  option: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: sp(22),
    fontFamily: FONTS.RobotoBold,
  },
  optionButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
