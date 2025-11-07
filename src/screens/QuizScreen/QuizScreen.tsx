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
  showExitDialog,
  startQuiz,
} from 'src/redux/slices/quiz/slice';
import {
  selectSoundEnabled,
  selectVibrationEnabled,
} from 'src/redux/slices/settings/selectors';
import type { MainStackNavigationProp } from 'src/types/mainStack';
import {
  vibrateForCorrect,
  vibrateForIncorrect,
} from 'src/utils/quizVibration';
import {
  loadSounds,
  playBackgroundMusic,
  playCorrectSound,
  playIncorrectSound,
  releaseAll,
  stopBackgroundMusic,
} from 'src/utils/sounds';

const QuizScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const dispatch = useAppDispatch();

  const isQuizStarted = useAppSelector(selectIsQuizStarted);
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const progress = useAppSelector(selectQuizProgress);
  const selectedAnswerIndex = useAppSelector(selectSelectedAnswerIndex);
  const isAnswerConfirmed = useAppSelector(selectIsAnswerConfirmed);
  const isAnswerRevealed = useAppSelector(selectIsAnswerRevealed);
  const showExitDialogState = useAppSelector(selectShowExitDialog);
  const correctAnswersCount = useAppSelector(selectCorrectAnswersCount);
  const soundEnabled = useAppSelector(selectSoundEnabled);
  const vibrationEnabled = useAppSelector(selectVibrationEnabled);

  const [showConfetti, setShowConfetti] = useState(false);

  const handleStart = () => {
    dispatch(startQuiz());
    if (soundEnabled) {
      playBackgroundMusic();
    }
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
      if (soundEnabled) {
        playCorrectSound();
      }
      if (vibrationEnabled) {
        vibrateForCorrect();
      }
      setShowConfetti(true);
    } else {
      if (soundEnabled) {
        playIncorrectSound();
      }
      if (vibrationEnabled) {
        vibrateForIncorrect();
      }
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
      if (soundEnabled) {
        stopBackgroundMusic();
      }
      navigation.navigate('VictoryScreen');
    } else {
      dispatch(nextQuestion());
    }
  };

  const handleExitConfirm = () => {
    if (soundEnabled) {
      stopBackgroundMusic();
    }
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
        if (!isQuizStarted || showExitDialogState) {
          return;
        }

        e.preventDefault();
        dispatch(showExitDialog());
      });

      return unsubscribe;
    }, [isQuizStarted, showExitDialogState, navigation, dispatch]),
  );

  useFocusEffect(
    useCallback(() => {
      if (soundEnabled) {
        loadSounds();
      }

      return () => {
        if (soundEnabled) {
          stopBackgroundMusic();
          releaseAll();
        }
      };
    }, [soundEnabled]),
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
        visible={showExitDialogState}
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />
      {showConfetti && <Confetti onEnd={handleConfettiEnd} />}
    </CustomScreenWrapper>
  );
};

export default QuizScreen;
