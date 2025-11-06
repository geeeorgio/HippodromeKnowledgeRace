import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

interface QuizVideoProps {
  source: any;
  onEnd?: () => void;
  loop?: boolean;
  muted?: boolean;
}

const QuizVideo = ({
  source,
  onEnd,
  loop = false,
  muted: _muted = false,
}: QuizVideoProps) => {
  useEffect(() => {
    if (!loop && onEnd) {
      const timer = setTimeout(() => {
        onEnd();
      }, 2000);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [loop, onEnd]);

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.video} resizeMode="cover" />
    </View>
  );
};

export default QuizVideo;
