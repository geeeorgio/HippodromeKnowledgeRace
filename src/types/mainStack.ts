import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { HistoryPlace } from 'src/constants';

export type MainStackParamsList = {
  HomeScreen: undefined;
  ArticlesScreen: undefined;
  QuizScreen: undefined;
  FavouritesScreen: undefined;
  AchievementsScreen: undefined;
  SettingsScreen: undefined;
  VictoryScreen: undefined;
  DetailsScreen: { article: HistoryPlace };
};

export type MainStackNavigationProp = NativeStackNavigationProp<
  MainStackParamsList,
  'HomeScreen'
>;
