import { createSlice } from '@reduxjs/toolkit';

interface QuizState {
  currentQuestionIndex: number;
  selectedAnswerIndex: number | null;
  isAnswerConfirmed: boolean;
  isAnswerRevealed: boolean;
  correctAnswersCount: number;
  isQuizStarted: boolean;
  isQuizCompleted: boolean;
  showExitDialog: boolean;
}

const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswerIndex: null,
  isAnswerConfirmed: false,
  isAnswerRevealed: false,
  correctAnswersCount: 0,
  isQuizStarted: false,
  isQuizCompleted: false,
  showExitDialog: false,
};

const slice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state) => {
      state.isQuizStarted = true;
      state.currentQuestionIndex = 0;
      state.selectedAnswerIndex = null;
      state.isAnswerConfirmed = false;
      state.isAnswerRevealed = false;
      state.correctAnswersCount = 0;
      state.isQuizCompleted = false;
    },
    selectAnswer: (state, action) => {
      if (!state.isAnswerConfirmed) {
        state.selectedAnswerIndex = action.payload;
      }
    },
    confirmAnswer: (state) => {
      if (state.selectedAnswerIndex !== null && !state.isAnswerConfirmed) {
        state.isAnswerConfirmed = true;
      }
    },
    revealAnswer: (state) => {
      state.isAnswerRevealed = true;
    },
    nextQuestion: (state) => {
      const currentQuestion = state.currentQuestionIndex;
      if (currentQuestion < 11) {
        state.currentQuestionIndex = currentQuestion + 1;
        state.selectedAnswerIndex = null;
        state.isAnswerConfirmed = false;
        state.isAnswerRevealed = false;
      } else {
        state.isQuizCompleted = true;
      }
    },
    showExitDialog: (state) => {
      state.showExitDialog = true;
    },
    hideExitDialog: (state) => {
      state.showExitDialog = false;
    },
    exitQuiz: (state) => {
      state.isQuizStarted = false;
      state.currentQuestionIndex = 0;
      state.selectedAnswerIndex = null;
      state.isAnswerConfirmed = false;
      state.isAnswerRevealed = false;
      state.correctAnswersCount = 0;
      state.isQuizCompleted = false;
      state.showExitDialog = false;
    },
    incrementCorrectAnswers: (state) => {
      state.correctAnswersCount += 1;
    },
    resetQuiz: () => {
      return initialState;
    },
  },
});

export const {
  startQuiz,
  selectAnswer,
  confirmAnswer,
  revealAnswer,
  nextQuestion,
  showExitDialog,
  hideExitDialog,
  exitQuiz,
  incrementCorrectAnswers,
  resetQuiz,
} = slice.actions;

export const quizReducer = slice.reducer;
