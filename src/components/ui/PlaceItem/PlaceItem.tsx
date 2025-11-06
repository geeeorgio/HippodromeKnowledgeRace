import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import PlaySvg from '../CustomIcons/PlaySvg';
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

interface PlaceItemProps {
  place: HistoryPlace;
  handlePress: (article: HistoryPlace) => void;
}

const PlaceItem = ({ place, handlePress }: PlaceItemProps) => {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(selectIsArticleFavorite(place));

  const sharePlace = async () => {
    await handleShare();
  };

  const toggleFavourites = async () => {
    if (!isFavorite) {
      dispatch(addFavoriteArticle(place));
    } else {
      dispatch(removeFavoriteArticle({ id: place.id }));
    }
  };

  return (
    <CustomContainer extraStyle={styles.container} variant="white">
      <View style={styles.imageContainer}>
        <Image source={place.image} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.contentContainer}>
        <CustomText extraStyle={styles.title}>{place.title}</CustomText>

        <View style={styles.btnContainer}>
          <CustomButton variant="default" handlePress={toggleFavourites}>
            <StarSvg
              width={wp(25)}
              height={hp(25)}
              color={isFavorite ? COLORS.white : undefined}
            />
          </CustomButton>

          <CustomButton
            variant="default"
            handlePress={() => handlePress(place)}
          >
            <PlaySvg width={wp(25)} height={hp(25)} />
          </CustomButton>

          <CustomButton variant="default" handlePress={sharePlace}>
            <ShareSvg width={wp(23)} height={hp(23)} />
          </CustomButton>
        </View>
      </View>
    </CustomContainer>
  );
};

export default PlaceItem;
