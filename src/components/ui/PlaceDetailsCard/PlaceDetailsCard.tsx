import React from 'react';
import { Image, ScrollView, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import ShareSvg from '../CustomIcons/ShareSvg';
import StarSvg from '../CustomIcons/StarSvg';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS, type HistoryPlace } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectIsArticleFavorite } from 'src/redux/slices/articles/selectors';
import {
  addFavoriteArticle,
  removeFavoriteArticle,
} from 'src/redux/slices/articles/slice';
import { handleShare, hp, wp } from 'src/utils';

interface PlaceDetailsCardProps {
  article: HistoryPlace;
}

const PlaceDetailsCard = ({ article }: PlaceDetailsCardProps) => {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(selectIsArticleFavorite(article));

  const toggleFavourites = async () => {
    if (!isFavorite) {
      dispatch(addFavoriteArticle(article));
    } else {
      dispatch(removeFavoriteArticle({ id: article.id }));
    }
  };

  const sharePlace = async () => {
    await handleShare();
  };

  return (
    <CustomContainer variant="white" extraStyle={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <CustomText extraStyle={styles.title}>{article.title}</CustomText>
        <View style={styles.imageContainer}>
          <Image
            source={article.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <CustomText extraStyle={styles.imageText}>{article.summary}</CustomText>
      </ScrollView>

      <View style={styles.btnContainer}>
        <CustomButton variant="default" handlePress={toggleFavourites}>
          <StarSvg
            width={wp(26)}
            height={hp(26)}
            color={isFavorite ? COLORS.white : undefined}
          />
        </CustomButton>
        <CustomButton variant="default" handlePress={sharePlace}>
          <ShareSvg width={wp(26)} height={hp(26)} />
        </CustomButton>
      </View>
    </CustomContainer>
  );
};

export default PlaceDetailsCard;
