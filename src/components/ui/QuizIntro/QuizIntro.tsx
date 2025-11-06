import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { GIRL } from 'src/constants';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={GIRL.QUIZ_GIRL}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <CustomContainer variant="purple" extraStyle={styles.card}>
          <CustomText extraStyle={styles.title}>
            Ready for the Challenge?
          </CustomText>
          <CustomText extraStyle={styles.description}>
            Each question is drawn from the stories you've explored. Test your
            knowledge, use your 50/50 lifeline wisely — and aim for the golden
            cup of mastery.
          </CustomText>
        </CustomContainer>
      </View>
      <CustomButton
        variant="blue"
        handlePress={onStart}
        extraStyle={styles.startButton}
      >
        <CustomText extraStyle={styles.buttonText}>Start</CustomText>
      </CustomButton>
    </View>
  );
};

export default QuizIntro;
