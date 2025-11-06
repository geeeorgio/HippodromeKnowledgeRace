import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';
import QuizAnswerOption from '../QuizAnswerOption/QuizAnswerOption';

import { styles } from './styles';

import type { ChariotQuizQuestion } from 'src/constants';

interface QuizQuestionCardProps {
  question: ChariotQuizQuestion;
  progress: { current: number; total: number };
  selectedAnswerIndex: number | null;
  isAnswerConfirmed: boolean;
  isAnswerRevealed: boolean;
  onSelectAnswer: (index: number) => void;
  onConfirm: () => void;
  onNext: () => void;
}

const QuizQuestionCard = ({
  question,
  progress,
  selectedAnswerIndex,
  isAnswerConfirmed,
  isAnswerRevealed,
  onSelectAnswer,
  onConfirm,
  onNext,
}: QuizQuestionCardProps) => {
  const shakeAnimation = useSharedValue(0);
  const isIncorrect =
    isAnswerRevealed &&
    selectedAnswerIndex !== null &&
    !question.options[selectedAnswerIndex].isCorrect;

  useEffect(() => {
    if (isIncorrect) {
      shakeAnimation.value = withRepeat(
        withSequence(
          withTiming(-10, { duration: 50 }),
          withTiming(10, { duration: 50 }),
          withTiming(-10, { duration: 50 }),
          withTiming(10, { duration: 50 }),
          withTiming(0, { duration: 50 }),
        ),
        1,
      );
    } else {
      shakeAnimation.value = 0;
    }
  }, [isIncorrect, shakeAnimation]);

  const isLastQuestion = progress.current === progress.total;

  return (
    <View style={styles.wrapper}>
      <CustomContainer variant="purple" extraStyle={styles.questionCard}>
        <View style={styles.progressContainer}>
          {Array.from({ length: progress.total }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index < progress.current && styles.progressDotActive,
              ]}
            />
          ))}
        </View>

        <CustomText extraStyle={styles.questionText}>
          {question.question}
        </CustomText>

        {question.image && (
          <View style={styles.imageContainer}>
            <Image
              source={question.image}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
      </CustomContainer>

      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <QuizAnswerOption
            key={index}
            text={option.text}
            isSelected={selectedAnswerIndex === index}
            isCorrect={option.isCorrect}
            isRevealed={isAnswerRevealed}
            onPress={() => onSelectAnswer(index)}
            disabled={isAnswerConfirmed}
            shakeAnimation={
              isIncorrect && selectedAnswerIndex === index
                ? shakeAnimation
                : undefined
            }
          />
        ))}
      </View>

      <CustomButton
        variant="purple"
        handlePress={isAnswerRevealed ? onNext : onConfirm}
        isDisabled={selectedAnswerIndex === null}
        extraStyle={styles.confirmButton}
      >
        <CustomText extraStyle={styles.confirmButtonText}>
          {isAnswerRevealed ? (isLastQuestion ? 'Finish' : 'Next') : 'Confirm'}
        </CustomText>
      </CustomButton>
    </View>
  );
};

export default QuizQuestionCard;
