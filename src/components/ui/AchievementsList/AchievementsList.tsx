import React from 'react';
import { FlatList, View } from 'react-native';

import AchievementItem from '../AchievementItem/AchievementItem';

import { styles } from './styles';

import { useAppSelector } from 'src/hooks/toolkit';
import { selectAchievementsWithRewards } from 'src/redux/slices/achievements/selectors';

const AchievementsList = () => {
  const achievements = useAppSelector(selectAchievementsWithRewards);

  return (
    <View style={styles.container}>
      <FlatList
        data={achievements}
        renderItem={({ item }) => <AchievementItem achievement={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default AchievementsList;
