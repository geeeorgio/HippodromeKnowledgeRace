import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  dots: {
    position: 'absolute',
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: hp(80),
    left: '50%',
    marginLeft: -wp(20),
  },
  circle: {
    position: 'absolute',
    width: wp(40),
    height: wp(40),
    borderRadius: wp(20),
    borderWidth: wp(8),
    borderColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleOverlay: {
    position: 'absolute',
    width: wp(40),
    height: wp(40),
    borderRadius: wp(20),
    borderWidth: wp(8),
    borderColor: COLORS.black,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    backgroundColor: COLORS.black,
    position: 'absolute',
    bottom: -wp(15) * 2.5,
    left: '50%',
    marginLeft: -wp(5),
  },
});
