import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { VIDEOS } from 'src/constants';

interface QuizVideoProps {
  onEnd: () => void;
}

const QuizVideo = ({ onEnd }: QuizVideoProps) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={VIDEOS.Win}
        autoPlay
        loop={false}
        style={styles.lottie}
        resizeMode="cover"
        onAnimationFinish={onEnd}
      />
    </View>
  );
};

export default QuizVideo;
