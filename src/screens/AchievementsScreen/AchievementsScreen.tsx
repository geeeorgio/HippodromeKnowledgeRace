import React from 'react';

import { styles } from './styles';

import { CustomScreenWrapper, AchievementsList } from 'src/components/ui';

const AchievementsScreen = () => {
  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <AchievementsList />
    </CustomScreenWrapper>
  );
};

export default AchievementsScreen;
