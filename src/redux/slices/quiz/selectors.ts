import { createSelector } from '@reduxjs/toolkit';

import { CHARIOT_QUIZ_QUESTIONS } from 'src/constants';
import type { RootState } from 'src/redux/store';

export const selectCurrentQuestionIndex = (state: RootState) =>
  state.quiz.currentQuestionIndex;

export const selectSelectedAnswerIndex = (state: RootState) =>
  state.quiz.selectedAnswerIndex;

export const selectIsAnswerConfirmed = (state: RootState) =>
  state.quiz.isAnswerConfirmed;

export const selectIsAnswerRevealed = (state: RootState) =>
  state.quiz.isAnswerRevealed;

export const selectCorrectAnswersCount = (state: RootState) =>
  state.quiz.correctAnswersCount;

export const selectIsQuizStarted = (state: RootState) =>
  state.quiz.isQuizStarted;

export const selectIsQuizCompleted = (state: RootState) =>
  state.quiz.isQuizCompleted;

export const selectShowExitDialog = (state: RootState) =>
  state.quiz.showExitDialog;

export const selectCurrentQuestion = createSelector(
  [selectCurrentQuestionIndex],
  (index) => CHARIOT_QUIZ_QUESTIONS[index],
);

export const selectQuizProgress = createSelector(
  [selectCurrentQuestionIndex],
  (index) => ({
    current: index + 1,
    total: CHARIOT_QUIZ_QUESTIONS.length,
  }),
);

export const selectTrophyType = createSelector(
  [selectCorrectAnswersCount],
  (count): 'bronze' | 'silver' | 'gold' => {
    if (count <= 4) {
      return 'bronze';
    }
    if (count <= 7) {
      return 'silver';
    }
    return 'gold';
  },
);

export const selectIsQuizActive = createSelector(
  [selectIsQuizStarted, selectIsQuizCompleted],
  (isStarted, isCompleted) => isStarted && !isCompleted,
);
