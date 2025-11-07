import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  QuizVideo,
} from 'src/components/ui';
import { QUIZ_RESULT_TEXTS, TROPHIES } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectIsQuizCompleted,
  selectTrophyType,
} from 'src/redux/slices/quiz/selectors';
import { resetQuiz } from 'src/redux/slices/quiz/slice';
import type { MainStackNavigationProp } from 'src/types/mainStack';

const VictoryScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const dispatch = useAppDispatch();
  const [showVideo, setShowVideo] = useState(true);
  const isQuizCompleted = useAppSelector(selectIsQuizCompleted);

  const trophyType = useAppSelector(selectTrophyType);

  const resultText = QUIZ_RESULT_TEXTS[trophyType];
  const trophyImage =
    trophyType === 'bronze'
      ? TROPHIES.Bronze
      : trophyType === 'silver'
        ? TROPHIES.Silver
        : TROPHIES.Gold;

  const handleMainMenu = () => {
    dispatch(resetQuiz());
    navigation.navigate('HomeScreen');
  };

  const handleTryAgain = () => {
    dispatch(resetQuiz());
    navigation.navigate('QuizScreen');
  };

  const handleVideoEnd = () => {
    if (isQuizCompleted) {
      setShowVideo(false);
    }
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.trophyContainer}>
          <Image
            source={trophyImage}
            style={styles.trophy}
            resizeMode="contain"
          />
        </View>

        <CustomContainer variant="purple" extraStyle={styles.resultCard}>
          <CustomText extraStyle={styles.title}>{resultText.title}</CustomText>
          <CustomText extraStyle={styles.description}>
            {resultText.description}
          </CustomText>
        </CustomContainer>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <CustomButton
          variant="blue"
          handlePress={handleMainMenu}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Main Menu</CustomText>
        </CustomButton>

        <CustomButton
          variant="blue"
          handlePress={handleTryAgain}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Try Again</CustomText>
        </CustomButton>
      </View>
      {showVideo && <QuizVideo onEnd={handleVideoEnd} />}
    </CustomScreenWrapper>
  );
};

export default VictoryScreen;
