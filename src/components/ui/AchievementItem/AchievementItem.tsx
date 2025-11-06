import React from 'react';
import { Image, View } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { AchievementWithReward } from 'src/redux/slices/achievements/selectors';

interface AchievementItemProps {
  achievement: AchievementWithReward;
}

const AchievementItem = ({ achievement }: AchievementItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={achievement.currentReward}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <CustomText extraStyle={styles.title}>{achievement.title}</CustomText>
      <CustomText extraStyle={styles.description}>
        {achievement.description}
      </CustomText>
    </View>
  );
};

export default AchievementItem;
