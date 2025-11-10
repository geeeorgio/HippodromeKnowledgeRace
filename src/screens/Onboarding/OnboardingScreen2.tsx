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
    navigation.navigate('OnboardingScreen3');
  };

  return (
    <LinearGradient
      colors={COLORS.redGradient}
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
        resizeMode="cover"
        style={styles.imageContainer}
      >
        {/* <Image
          source={GIRL.GIRL_NOTEBOOK}
          style={styles.image}
          resizeMode="contain"
        /> */}
      </ImageBackground>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <CustomText extraStyle={styles.title}>Test Your Knowledge</CustomText>
          <CustomText extraStyle={styles.description}>
            Every story hides a challenge. Answer quiz questions, and see if you
            can earn the golden cup of wisdom.
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
