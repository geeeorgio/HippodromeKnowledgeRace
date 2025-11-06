import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomScreenWrapper,
  CustomText,
} from 'src/components/ui';
import { HOME_IMG } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types/mainStack';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleArticles = () => {
    navigation.navigate('ArticlesScreen');
  };

  const handleCheckYourself = () => {
    navigation.navigate('QuizScreen');
  };

  const handleFavorite = () => {
    navigation.navigate('FavouritesScreen');
  };

  const handleAchievements = () => {
    navigation.navigate('AchievementsScreen');
  };

  const handleSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.wrapper}>
      <View style={styles.btnContainer}>
        <CustomButton extraStyle={styles.btn} handlePress={handleArticles}>
          <CustomText extraStyle={styles.btnText}>Articles</CustomText>
        </CustomButton>
        <CustomButton extraStyle={styles.btn} handlePress={handleCheckYourself}>
          <CustomText extraStyle={styles.btnText}>Check Yourself</CustomText>
        </CustomButton>
        <CustomButton extraStyle={styles.btn} handlePress={handleFavorite}>
          <CustomText extraStyle={styles.btnText}>Favorite</CustomText>
        </CustomButton>
        <CustomButton extraStyle={styles.btn} handlePress={handleAchievements}>
          <CustomText extraStyle={styles.btnText}>Achievements </CustomText>
        </CustomButton>
        <CustomButton extraStyle={styles.btn} handlePress={handleSettings}>
          <CustomText extraStyle={styles.btnText}>Settings</CustomText>
        </CustomButton>
      </View>
      <View style={styles.imageContainer}>
        <Image source={HOME_IMG} resizeMode="contain" style={styles.image} />
      </View>
    </CustomScreenWrapper>
  );
};

export default HomeScreen;
