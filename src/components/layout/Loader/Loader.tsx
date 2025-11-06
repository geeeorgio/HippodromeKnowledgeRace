import React, { useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
} from 'react-native-reanimated';

import { styles } from './styles';

import { LOADER } from 'src/constants';

const Loader = () => {
  const rot1 = useSharedValue(0);
  const rot2 = useSharedValue(0);

  useEffect(() => {
    rot1.value = withRepeat(withTiming(360, { duration: 1200 }), -1, false);
    rot2.value = withDelay(
      600,
      withRepeat(withTiming(360, { duration: 1200 }), -1, false),
    );
  }, [rot1, rot2]);

  const style1 = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rot1.value}deg` }],
  }));

  const style2 = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rot2.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <ImageBackground
        source={LOADER}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.dots}>
        <Animated.View style={[styles.circle, style1]}>
          <View style={styles.dot} />
        </Animated.View>
        <Animated.View style={[styles.circleOverlay, style2]}>
          <View style={styles.dot} />
        </Animated.View>
      </View>
    </View>
  );
};

export default Loader;
