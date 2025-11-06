import { REWARDS } from './images';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  defaultReward: number;
  completedReward: number;
  isCompleted: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'racerOfInsight',
    title: 'Racer of Insight',
    description: 'for 4 or less correct answers',
    defaultReward: REWARDS.RacerDark,
    completedReward: REWARDS.RacerBronze,
    isCompleted: false,
  },
  {
    id: 'charioteerOfWisdom',
    title: 'Charioteer of Wisdom',
    description: 'for 7 or less correct answers',
    defaultReward: REWARDS.WisdomDark,
    completedReward: REWARDS.WisdomSilver,
    isCompleted: false,
  },
  {
    id: 'masterOfTheArena',
    title: 'Master of the Arena',
    description: 'for 8 or more correct answers',
    defaultReward: REWARDS.MasterDark,
    completedReward: REWARDS.MasterGold,
    isCompleted: false,
  },
  {
    id: 'curiousBeginner',
    title: 'Curious Beginner',
    description: 'for reading your first article',
    defaultReward: REWARDS.CuriosDark,
    completedReward: REWARDS.CuriousBronze,
    isCompleted: false,
  },
  {
    id: 'scholarOnTheRise',
    title: 'Scholar on the Rise',
    description: 'for reading five articles',
    defaultReward: REWARDS.ScolarDark,
    completedReward: REWARDS.ScolarSilver,
    isCompleted: false,
  },
  {
    id: 'keeperOfKnowledge',
    title: 'Keeper of Knowledge',
    description: 'for reading all twelve articles',
    defaultReward: REWARDS.KeeperDark,
    completedReward: REWARDS.KeeperGold,
    isCompleted: false,
  },
];
