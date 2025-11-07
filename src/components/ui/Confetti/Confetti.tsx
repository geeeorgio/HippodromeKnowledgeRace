import LottieView from 'lottie-react-native';
import { View } from 'react-native';

import { styles } from './styles';

import { VIDEOS } from 'src/constants';

interface ConfettiProps {
  onEnd: () => void;
}

const Confetti = ({ onEnd }: ConfettiProps) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={VIDEOS.Correct}
        autoPlay
        loop={false}
        resizeMode="cover"
        style={styles.lottie}
        onAnimationFinish={onEnd}
      />
    </View>
  );
};

export default Confetti;
