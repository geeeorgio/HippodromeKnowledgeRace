import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MainStackParamsList } from './mainStack';
import type { OnboardingStackParamsList } from './onboardingStack';

export type RootStackParamsList = {
  MainStack: NavigatorScreenParams<MainStackParamsList>;
  OnboardingStack: NavigatorScreenParams<OnboardingStackParamsList>;
};

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'MainStack'
>;
