import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  AchievementsScreen,
  ArticlesScreen,
  FavouritesScreen,
  HomeScreen,
  QuizScreen,
  SettingsScreen,
  VictoryScreen,
} from 'src/screens';
import type { MainStackParamsList } from 'src/types/mainStack';

const Main = createNativeStackNavigator<MainStackParamsList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <Main.Screen name={'HomeScreen'} component={HomeScreen} />
      <Main.Screen name={'ArticlesScreen'} component={ArticlesScreen} />
      <Main.Screen name={'QuizScreen'} component={QuizScreen} />
      <Main.Screen name={'FavouritesScreen'} component={FavouritesScreen} />
      <Main.Screen name={'AchievementsScreen'} component={AchievementsScreen} />
      <Main.Screen name={'SettingsScreen'} component={SettingsScreen} />
      <Main.Screen
        options={{
          presentation: 'transparentModal',
          animation: 'slide_from_right',
        }}
        name={'VictoryScreen'}
        component={VictoryScreen}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
