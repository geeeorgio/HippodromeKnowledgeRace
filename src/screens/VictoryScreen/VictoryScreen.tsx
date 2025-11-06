import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components/ui';
import { QUIZ_RESULT_TEXTS, TROPHIES, VIDEOS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectTrophyType } from 'src/redux/slices/quiz/selectors';
import { resetQuiz } from 'src/redux/slices/quiz/slice';
import type { MainStackNavigationProp } from 'src/types/mainStack';

const VictoryScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const dispatch = useAppDispatch();

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

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Image source={VIDEOS.Win} style={styles.video} resizeMode="cover" />
      </View>

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

          <View style={styles.buttonsContainer}>
            <CustomButton
              variant="purple"
              handlePress={handleMainMenu}
              extraStyle={styles.button}
            >
              <CustomText extraStyle={styles.buttonText}>Main Menu</CustomText>
            </CustomButton>

            <CustomButton
              variant="purple"
              handlePress={handleTryAgain}
              extraStyle={styles.button}
            >
              <CustomText extraStyle={styles.buttonText}>Try Again</CustomText>
            </CustomButton>
          </View>
        </CustomContainer>
      </ScrollView>
    </View>
  );
};

export default VictoryScreen;
