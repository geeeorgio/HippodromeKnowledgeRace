import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  OnboardingScreen,
  OnboardingScreen1,
  OnboardingScreen2,
  OnboardingScreen3,
} from 'src/screens';
import type { OnboardingStackParamsList } from 'src/types/onboardingStack';

const Onboarding = createNativeStackNavigator<OnboardingStackParamsList>();

const OnboardingNavigator = () => {
  return (
    <Onboarding.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <Onboarding.Screen
        name={'OnboardingScreen'}
        component={OnboardingScreen}
      />
      <Onboarding.Screen
        name={'OnboardingScreen1'}
        component={OnboardingScreen1}
      />
      <Onboarding.Screen
        name={'OnboardingScreen2'}
        component={OnboardingScreen2}
      />
      <Onboarding.Screen
        name={'OnboardingScreen3'}
        component={OnboardingScreen3}
      />
    </Onboarding.Navigator>
  );
};

export default OnboardingNavigator;
