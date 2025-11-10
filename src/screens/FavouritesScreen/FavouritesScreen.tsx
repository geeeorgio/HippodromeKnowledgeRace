import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  PlacesList,
} from 'src/components/ui';
import { GIRL, type HistoryPlace } from 'src/constants';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectSortedFavoriteArticles } from 'src/redux/slices/articles/selectors';
import type { MainStackNavigationProp } from 'src/types/mainStack';

const FavouritesScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const articles = useAppSelector(selectSortedFavoriteArticles);

  const handlePress = (article: HistoryPlace) => {
    navigation.navigate('DetailsScreen', { article });
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {articles.length > 0 ? (
        <PlacesList places={articles} handlePress={handlePress} />
      ) : (
        <View style={styles.emptyContainer}>
          {/* <Image
            source={GIRL.FAVOURITE_GIRL}
            style={styles.emptyImage}
            resizeMode="cover"
          /> */}
          <CustomContainer
            variant="white"
            extraStyle={styles.emptyTextContainer}
          >
            <CustomText extraStyle={styles.emptyTextTitle}>
              No Favorites Yet
            </CustomText>
            <CustomText extraStyle={styles.emptyTextDescription}>
              Start exploring and add the stories you love to your favorites.
            </CustomText>
          </CustomContainer>
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default FavouritesScreen;
