import React, { useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  FavouriteSvg,
  ResetSvg,
  SettingsModalDialog,
  ShareSvg,
  SoundSvg,
  VibrationSvg,
} from 'src/components/ui';
import { COLORS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { resetAchievements } from 'src/redux/slices/achievements/slice';
import { resetArticles } from 'src/redux/slices/articles/slice';
import { resetQuiz } from 'src/redux/slices/quiz/slice';
import {
  selectSoundEnabled,
  selectVibrationEnabled,
} from 'src/redux/slices/settings/selectors';
import { setSound, setVibration } from 'src/redux/slices/settings/slice';
import { handleShare, wp } from 'src/utils';
import { vibrateForCorrect } from 'src/utils/quizVibration';
import { playCorrectSound } from 'src/utils/sounds';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const soundEnabled = useAppSelector(selectSoundEnabled);
  const vibrationEnabled = useAppSelector(selectVibrationEnabled);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState<
    'resetProgress' | 'clearFavorite' | null
  >(null);

  const handleSoundToggle = () => {
    if (soundEnabled) {
      dispatch(setSound(false));
    } else {
      playCorrectSound();
      dispatch(setSound(true));
    }
  };

  const handleVibrationToggle = () => {
    if (vibrationEnabled) {
      dispatch(setVibration(false));
    } else {
      vibrateForCorrect();
      dispatch(setVibration(true));
    }
  };

  const onShare = () => {
    handleShare();
  };

  const handleResetProgress = () => {
    dispatch(resetQuiz());
    dispatch(resetAchievements());
    setIsModalVisible(false);
    setModalMode(null);
  };

  const handleClearFavorite = () => {
    dispatch(resetArticles());
    setIsModalVisible(false);
    setModalMode(null);
  };

  const handleResetProgressModal = () => {
    setModalMode('resetProgress');
    setIsModalVisible(true);
  };
  const handleClearFavoriteModal = () => {
    setModalMode('clearFavorite');
    setIsModalVisible(true);
  };

  const handleCloseSettingsModalDialog = () => {
    setIsModalVisible(false);
    setModalMode(null);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomContainer variant="white" extraStyle={styles.contentContainer}>
        <CustomText extraStyle={styles.title}>Setup</CustomText>

        <View style={styles.optionsContainer}>
          <View style={styles.option}>
            <CustomText extraStyle={styles.optionText}>Sounds</CustomText>
            <CustomButton
              variant="default"
              handlePress={handleSoundToggle}
              extraStyle={styles.optionButton}
            >
              <SoundSvg
                width={wp(28)}
                height={wp(28)}
                color={soundEnabled ? COLORS.white : COLORS.darkGrey}
              />
            </CustomButton>
          </View>
          <View style={styles.option}>
            <CustomText extraStyle={styles.optionText}>Vibration</CustomText>
            <CustomButton
              variant="default"
              handlePress={handleVibrationToggle}
              extraStyle={styles.optionButton}
            >
              <VibrationSvg
                width={wp(28)}
                height={wp(28)}
                color={vibrationEnabled ? COLORS.white : COLORS.darkGrey}
              />
            </CustomButton>
          </View>
          <View style={styles.option}>
            <CustomText extraStyle={styles.optionText}>
              Reset Progress
            </CustomText>
            <CustomButton
              variant="default"
              handlePress={handleResetProgressModal}
              extraStyle={styles.optionButton}
            >
              <ResetSvg width={wp(30)} height={wp(30)} />
            </CustomButton>
          </View>
          <View style={styles.option}>
            <CustomText extraStyle={styles.optionText}>
              Clear Favorite
            </CustomText>
            <CustomButton
              variant="default"
              handlePress={handleClearFavoriteModal}
              extraStyle={styles.optionButton}
            >
              <FavouriteSvg width={wp(26)} height={wp(26)} />
            </CustomButton>
          </View>
          <View style={styles.option}>
            <CustomText extraStyle={styles.optionText}>Share App</CustomText>
            <CustomButton
              variant="default"
              handlePress={onShare}
              extraStyle={styles.optionButton}
            >
              <ShareSvg width={wp(27)} height={wp(27)} />
            </CustomButton>
          </View>
        </View>
      </CustomContainer>

      {isModalVisible && (
        <SettingsModalDialog
          visible={isModalVisible}
          onCancel={handleCloseSettingsModalDialog}
          onConfirm={
            modalMode === 'resetProgress'
              ? handleResetProgress
              : handleClearFavorite
          }
          label={
            modalMode === 'resetProgress'
              ? 'Reset Your Progress?'
              : 'Remove All Favorites?'
          }
          description={
            modalMode === 'resetProgress'
              ? 'All achievements and quiz results will be lost.'
              : 'This action will clear your entire favorites list.'
          }
        ></SettingsModalDialog>
      )}
    </CustomScreenWrapper>
  );
};

export default SettingsScreen;
