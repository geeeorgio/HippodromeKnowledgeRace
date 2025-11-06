import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(12),
    backgroundColor: COLORS.purpleContainer,
    borderWidth: wp(1),
  },
  white: { borderColor: COLORS.white },
  yellow: { borderColor: COLORS.borderColor },
});
