import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components/ui';
import { COLORS, GIRL, ONBOARDING_BACKGROUND } from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import { completeOnboarding } from 'src/redux/slices/onboarding/slice';
import { hp } from 'src/utils';

const OnboardingScreen = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const handleNext = () => {
    dispatch(completeOnboarding());
  };

  return (
    <LinearGradient
      colors={COLORS.axiantGradient}
      style={[
        styles.container,
        {
          paddingTop: insets.top + hp(20),
          paddingBottom: insets.bottom,
        },
      ]}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <ImageBackground
        source={ONBOARDING_BACKGROUND}
        resizeMode="contain"
        style={styles.imageContainer}
      >
        {/* <Image
          source={GIRL.GIRL_WINNER}
          style={styles.image}
          resizeMode="contain"
        /> */}
      </ImageBackground>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <CustomText extraStyle={styles.title}>
            Earn Your Place Among Legends
          </CustomText>
          <CustomText extraStyle={styles.description}>
            Collect rewards for what you learn. Each achievement marks your
            journey — from eager apprentice to master of the Hippodrome.
          </CustomText>
        </View>
      </View>

      <CustomButton extraStyle={styles.button} handlePress={handleNext}>
        <CustomText extraStyle={styles.buttonText}>Start</CustomText>
      </CustomButton>
    </LinearGradient>
  );
};

export default OnboardingScreen;
