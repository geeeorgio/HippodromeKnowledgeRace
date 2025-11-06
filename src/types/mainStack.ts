import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamsList = {
  HomeScreen: undefined;
  ArticlesScreen: undefined;
  QuizScreen: undefined;
  FavouritesScreen: undefined;
  AchievementsScreen: undefined;
  SettingsScreen: undefined;
  VictoryScreen: undefined;
};

export type MainStackNavigationProp = NativeStackNavigationProp<
  MainStackParamsList,
  'HomeScreen'
>;
