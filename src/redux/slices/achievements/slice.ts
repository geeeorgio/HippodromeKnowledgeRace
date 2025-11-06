import { createSlice } from '@reduxjs/toolkit';

import type { Achievement } from 'src/constants';
import { ACHIEVEMENTS } from 'src/constants';

interface AchievementsState {
  achievements: Achievement[];
  currentAchievement: Achievement | undefined;
  completedAchievements: Achievement[] | undefined;
}

const initialState: AchievementsState = {
  achievements: ACHIEVEMENTS,
  currentAchievement: undefined,
  completedAchievements: [],
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
    resetAchievements: (state) => {
      state.achievements = ACHIEVEMENTS;
      state.currentAchievement = undefined;
      state.completedAchievements = [];
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
} = slice.actions;

export const achievementsReducer = slice.reducer;
