import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Achievement } from 'src/constants';
import { ACHIEVEMENTS } from 'src/constants';

interface AchievementsState {
  achievements: Achievement[];
  currentAchievement: Achievement | undefined;
  completedAchievements: Achievement[] | undefined;
  readArticleIds: string[];
}

const initialState: AchievementsState = {
  achievements: ACHIEVEMENTS,
  currentAchievement: undefined,
  completedAchievements: [],
  readArticleIds: [],
};

const slice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    setCurrentAchievement: (state, action) => {
      state.currentAchievement = action.payload;
    },
    resetCurrentAchievement: (state) => {
      state.currentAchievement = undefined;
    },
    addCompletedAchievement: (state, action) => {
      const achievement = state.achievements.find(
        (ach) => ach.id === action.payload.id,
      );
      if (achievement) {
        const newAchievement = { ...achievement, isCompleted: true };
        state.completedAchievements?.push(newAchievement);
      }
    },
    removeCompletedAchievement: (state, action) => {
      state.completedAchievements = state.completedAchievements?.filter(
        (achievement) => achievement.id !== action.payload.id,
      );
    },
    resetCompletedAchievements: (state) => {
      state.completedAchievements = [];
    },
    addReadArticleId: (state, action: PayloadAction<string>) => {
      if (!state.readArticleIds.includes(action.payload)) {
        state.readArticleIds.push(action.payload);
      }
    },
    resetAchievements: (state) => {
      state.achievements = ACHIEVEMENTS;
      state.currentAchievement = undefined;
      state.completedAchievements = [];
      state.readArticleIds = [];
    },
  },
});

export const {
  setCurrentAchievement,
  resetCurrentAchievement,
  addCompletedAchievement,
  removeCompletedAchievement,
  resetCompletedAchievements,
  resetAchievements,
  addReadArticleId,
} = slice.actions;

export const achievementsReducer = slice.reducer;
