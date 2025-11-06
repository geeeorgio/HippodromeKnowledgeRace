import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { VIDEOS } from 'src/constants';

interface ConfettiProps {
  onEnd: () => void;
}

const Confetti = ({ onEnd }: ConfettiProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnd();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <View style={styles.container}>
      <Image source={VIDEOS.Correct} style={styles.image} resizeMode="cover" />
    </View>
  );
};

export default Confetti;
