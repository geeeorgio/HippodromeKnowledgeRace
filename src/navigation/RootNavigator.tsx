import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { Layout } from 'src/components/layout';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectIsOnboardingCompleted } from 'src/redux/slices/onboarding/selectors';
import type { RootStackParamsList } from 'src/types/rootNavigation';

const Root = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const isOnboardingCompleted = useAppSelector(selectIsOnboardingCompleted);

  return (
    <Layout>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          gestureEnabled: false,
          animation: 'fade',
        }}
      >
        {isOnboardingCompleted ? (
          <Root.Screen name={'MainStack'} component={MainNavigator} />
        ) : (
          <Root.Screen
            name={'OnboardingStack'}
            component={OnboardingNavigator}
          />
        )}
      </Root.Navigator>
    </Layout>
  );
};

export default RootNavigator;
