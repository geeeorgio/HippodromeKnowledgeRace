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
    navigation.navigate('OnboardingScreen2');
  };

  return (
    <LinearGradient
      colors={COLORS.blueGradient}
      style={[
        styles.container,
        {
          paddingTop: insets.top + hp(20),
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
        <Image
          source={GIRL.GIRL_WITH_BOOK}
          style={styles.image}
          resizeMode="contain"
        />
      </ImageBackground>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <CustomText extraStyle={styles.title}>
            Explore the Stories of the Ages
          </CustomText>
          <CustomText extraStyle={styles.description}>
            Travel through twelve eras, from Mesopotamia to Medieval Europe.
            Each story reveals how chariots shaped empires, art, and human
            ambition.
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
