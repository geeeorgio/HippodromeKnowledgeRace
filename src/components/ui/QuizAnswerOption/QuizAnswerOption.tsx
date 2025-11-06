import React from 'react';
import Animated, {
  type SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface QuizAnswerOptionProps {
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isRevealed: boolean;
  onPress: () => void;
  disabled?: boolean;
  shakeAnimation?: SharedValue<number>;
}

const QuizAnswerOption = ({
  text,
  isSelected,
  isCorrect,
  isRevealed,
  onPress,
  disabled = false,
  shakeAnimation,
}: QuizAnswerOptionProps) => {
  const selected = isSelected && !isRevealed;
  const green = isCorrect && isRevealed;
  const red = !isCorrect && isRevealed && isSelected;

  const variant = selected
    ? 'selected'
    : green
      ? 'green'
      : red
        ? 'red'
        : 'purpleOpacity';

  const shouldShake = isRevealed && isSelected && !isCorrect && shakeAnimation;

  const animatedStyle = useAnimatedStyle(() => {
    if (shouldShake && shakeAnimation) {
      return {
        transform: [{ translateX: shakeAnimation.value }],
      };
    }
    return {};
  });

  const content = <CustomText extraStyle={styles.text}>{text}</CustomText>;

  const button = (
    <CustomButton
      variant={variant}
      handlePress={onPress}
      isDisabled={disabled}
      extraStyle={styles.container}
      fullWidth
    >
      {content}
    </CustomButton>
  );

  if (shouldShake) {
    return <Animated.View style={animatedStyle}>{button}</Animated.View>;
  }

  return button;
};

export default QuizAnswerOption;
