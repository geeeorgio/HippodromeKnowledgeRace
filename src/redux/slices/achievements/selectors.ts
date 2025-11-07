import { createSelector } from '@reduxjs/toolkit';

import type { Achievement } from 'src/constants';
import type { RootState } from 'src/redux/store';

export interface AchievementWithReward extends Achievement {
  currentReward: number;
}

export const selectAchievements = (state: RootState) =>
  state.achievements.achievements;

export const selectCurrentAchievement = (state: RootState) =>
  state.achievements.currentAchievement;

export const selectCompletedAchievements = (state: RootState) =>
  state.achievements.completedAchievements;

export const selectIsAchievementCompleted =
  (id: string) => (state: RootState) =>
    state.achievements.completedAchievements?.some(
      (achievement) => achievement.id === id,
    );

// export const selectAchievementsWithRewards = createSelector(
//   [selectAchievements, selectCompletedAchievements],
//   (achievements, completedAchievements): AchievementWithReward[] => {
//     const completedIds = new Set(
//       completedAchievements?.map((achievement) => achievement.id) || [],
//     );

//     return achievements.map((achievement) => ({
//       ...achievement,
//       currentReward: completedIds.has(achievement.id)
//         ? achievement.completedReward
//         : achievement.defaultReward,
//       isCompleted: completedIds.has(achievement.id),
//     }));
//   },
// );

export const selectReadArticleCount = (state: RootState) =>
  state.achievements.readArticleIds.length;

export const selectAchievementsWithRewards = createSelector(
  [selectAchievements, selectCompletedAchievements, selectReadArticleCount],
  (achievements, completedFromReducer, readCount): AchievementWithReward[] => {
    const completedIds = new Set(
      completedFromReducer?.map((achievement) => achievement.id) || [],
    );

    if (readCount >= 1) completedIds.add('curiousBeginner');
    if (readCount >= 5) completedIds.add('scholarOnTheRise');

    if (readCount >= achievements.length) completedIds.add('keeperOfKnowledge');

    return achievements.map((achievement) => {
      const isCompleted = completedIds.has(achievement.id);

      return {
        ...achievement,
        isCompleted: isCompleted,
        currentReward: isCompleted
          ? achievement.completedReward
          : achievement.defaultReward,
      };
    });
  },
);
