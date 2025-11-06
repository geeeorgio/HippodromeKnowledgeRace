export type TrophyType = 'bronze' | 'silver' | 'gold';

export const getTrophyType = (correctAnswers: number): TrophyType => {
  if (correctAnswers <= 4) {
    return 'bronze';
  }
  if (correctAnswers <= 7) {
    return 'silver';
  }
  return 'gold';
};
