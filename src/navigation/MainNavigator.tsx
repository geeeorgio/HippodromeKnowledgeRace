import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomHeader } from 'src/components/ui';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectFavoriteArticles } from 'src/redux/slices/articles/selectors';
import {
  AchievementsScreen,
  ArticlesScreen,
  DetailsScreen,
  FavouritesScreen,
  HomeScreen,
  QuizScreen,
  SettingsScreen,
  VictoryScreen,
} from 'src/screens';
import type { MainStackParamsList } from 'src/types/mainStack';

const Main = createNativeStackNavigator<MainStackParamsList>();

const MainNavigator = () => {
  const favoriteArticles = useAppSelector(selectFavoriteArticles);

  const showSortOption = favoriteArticles && favoriteArticles?.length > 0;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Main.Navigator
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
          contentStyle: { backgroundColor: 'transparent' },
          gestureEnabled: false,
          animation: 'slide_from_right',
        }}
      >
        <Main.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Main.Screen
          name={'ArticlesScreen'}
          component={ArticlesScreen}
          options={{ title: 'sort' }}
        />
        <Main.Screen
          name={'QuizScreen'}
          component={QuizScreen}
          options={{ title: 'empty' }}
        />
        <Main.Screen
          name={'FavouritesScreen'}
          component={FavouritesScreen}
          options={{ title: showSortOption ? 'sort' : 'empty' }}
        />
        <Main.Screen
          name={'AchievementsScreen'}
          component={AchievementsScreen}
          options={{ title: 'Achievements' }}
        />
        <Main.Screen
          name={'SettingsScreen'}
          component={SettingsScreen}
          options={{ title: 'empty' }}
        />
        <Main.Screen
          options={{
            headerShown: false,
            animation: 'fade',
          }}
          name={'VictoryScreen'}
          component={VictoryScreen}
        />
        <Main.Screen
          name={'DetailsScreen'}
          component={DetailsScreen}
          options={{ title: 'empty' }}
        />
      </Main.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigator;
