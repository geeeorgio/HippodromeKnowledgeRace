import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { styles } from './styles';

import { CustomScreenWrapper, PlacesList } from 'src/components/ui';
import type { HistoryPlace } from 'src/constants';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectSortedArticles } from 'src/redux/slices/articles/selectors';
import type { MainStackNavigationProp } from 'src/types/mainStack';

const ArticlesScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const articles = useAppSelector(selectSortedArticles);

  const handlePress = (article: HistoryPlace) => {
    navigation.navigate('DetailsScreen', { article });
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <PlacesList places={articles} handlePress={handlePress} />
    </CustomScreenWrapper>
  );
};

export default ArticlesScreen;
