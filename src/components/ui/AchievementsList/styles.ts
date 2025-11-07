import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    gap: hp(8),
  },
  row: {
    gap: wp(8),
  },
});
