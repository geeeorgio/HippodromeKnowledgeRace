import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components/ui';
import { COLORS, GIRL, ONBOARDING_BACKGROUND } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types/onboardingStack';
import { hp } from 'src/utils';

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();
  const insets = useSafeAreaInsets();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen1');
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
          source={GIRL.GIRL_HANDS_TOGETHER}
          style={styles.image}
          resizeMode="contain"
        /> */}
      </ImageBackground>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <CustomText extraStyle={styles.title}>
            Welcome to the Arena of Knowledge
          </CustomText>
          <CustomText extraStyle={styles.description}>
            Step into a world where history, mastery, and motion meet. Discover
            the legacy of chariots — and test how far your curiosity can take
            you.
          </CustomText>
        </View>
      </View>

      <CustomButton extraStyle={styles.button} handlePress={handleNext}>
        <CustomText extraStyle={styles.buttonText}>Next</CustomText>
      </CustomButton>
    </LinearGradient>
  );
};

export default OnboardingScreen;
