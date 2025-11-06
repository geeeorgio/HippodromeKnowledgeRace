import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import React from 'react';

import { styles } from './styles';

import { CustomScreenWrapper, PlaceDetailsCard } from 'src/components/ui';
import type { MainStackParamsList } from 'src/types/mainStack';

const DetailsScreen = () => {
  const route = useRoute<RouteProp<MainStackParamsList, 'DetailsScreen'>>();

  const { article } = route.params;

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <PlaceDetailsCard article={article} />
    </CustomScreenWrapper>
  );
};

export default DetailsScreen;
