import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';

import { styles } from './styles';

import {
  Confetti,
  CustomScreenWrapper,
  ExitQuizDialog,
  QuizIntro,
  QuizQuestionCard,
} from 'src/components/ui';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { addCompletedAchievement } from 'src/redux/slices/achievements/slice';
import {
  selectCorrectAnswersCount,
  selectCurrentQuestion,
  selectIsAnswerConfirmed,
  selectIsAnswerRevealed,
  selectIsQuizStarted,
  selectQuizProgress,
  selectSelectedAnswerIndex,
  selectShowExitDialog,
} from 'src/redux/slices/quiz/selectors';
import {
  confirmAnswer,
  exitQuiz,
  hideExitDialog,
  incrementCorrectAnswers,
  nextQuestion,
  revealAnswer,
  selectAnswer,
  showExitDialog as showExitDialogAction,
  startQuiz,
} from 'src/redux/slices/quiz/slice';
import type { MainStackNavigationProp } from 'src/types/mainStack';
import { playCorrectSound, playIncorrectSound } from 'src/utils/quizSounds';
import {
  vibrateForCorrect,
  vibrateForIncorrect,
} from 'src/utils/quizVibration';

const QuizScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const dispatch = useAppDispatch();

  const isQuizStarted = useAppSelector(selectIsQuizStarted);
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const progress = useAppSelector(selectQuizProgress);
  const selectedAnswerIndex = useAppSelector(selectSelectedAnswerIndex);
  const isAnswerConfirmed = useAppSelector(selectIsAnswerConfirmed);
  const isAnswerRevealed = useAppSelector(selectIsAnswerRevealed);
  const showExitDialog = useAppSelector(selectShowExitDialog);
  const correctAnswersCount = useAppSelector(selectCorrectAnswersCount);

  const [showConfetti, setShowConfetti] = useState(false);

  const handleStart = () => {
    dispatch(startQuiz());
  };

  const handleSelectAnswer = (index: number) => {
    dispatch(selectAnswer(index));
  };

  const handleConfirm = () => {
    if (selectedAnswerIndex === null) {
      return;
    }
    dispatch(confirmAnswer());
    dispatch(revealAnswer());

    const isCorrect = currentQuestion?.options[selectedAnswerIndex].isCorrect;

    if (isCorrect) {
      dispatch(incrementCorrectAnswers());
      playCorrectSound();
      vibrateForCorrect();
      setShowConfetti(true);
    } else {
      playIncorrectSound();
      vibrateForIncorrect();
    }
  };

  const handleConfettiEnd = () => {
    setShowConfetti(false);
  };

  const handleNext = () => {
    const isLastQuestion = progress.current === progress.total;

    setShowConfetti(false);

    if (isLastQuestion) {
      if (correctAnswersCount <= 4) {
        dispatch(addCompletedAchievement({ id: 'racerOfInsight' }));
      }
      if (correctAnswersCount <= 7) {
        dispatch(addCompletedAchievement({ id: 'charioteerOfWisdom' }));
      }
      if (correctAnswersCount >= 8) {
        dispatch(addCompletedAchievement({ id: 'masterOfTheArena' }));
      }
      navigation.navigate('VictoryScreen');
    } else {
      dispatch(nextQuestion());
    }
  };

  const handleExitConfirm = () => {
    dispatch(exitQuiz());
    dispatch(hideExitDialog());
    navigation.goBack();
  };

  const handleExitCancel = () => {
    dispatch(hideExitDialog());
  };

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
        if (!isQuizStarted || showExitDialog) {
          return;
        }

        e.preventDefault();
        dispatch(showExitDialogAction());
      });

      return unsubscribe;
    }, [isQuizStarted, showExitDialog, navigation, dispatch]),
  );

  if (!isQuizStarted) {
    return (
      <CustomScreenWrapper extraStyle={styles.container}>
        <QuizIntro onStart={handleStart} />
      </CustomScreenWrapper>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <QuizQuestionCard
        question={currentQuestion}
        progress={progress}
        selectedAnswerIndex={selectedAnswerIndex}
        isAnswerConfirmed={isAnswerConfirmed}
        isAnswerRevealed={isAnswerRevealed}
        onSelectAnswer={handleSelectAnswer}
        onConfirm={handleConfirm}
        onNext={handleNext}
      />
      <ExitQuizDialog
        visible={showExitDialog}
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />
      {showConfetti && <Confetti onEnd={handleConfettiEnd} />}
    </CustomScreenWrapper>
  );
};

export default QuizScreen;
