import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import type { ReactNode } from 'react';
import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import SortSvg from '../CustomIcons/SortSvg';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { BACK_ARROW } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectSortMode } from 'src/redux/slices/filter/selectors';
import { setSortMode } from 'src/redux/slices/filter/slice';
import { hp, wp } from 'src/utils';

const CustomHeader = (props: NativeStackHeaderProps) => {
  const { options, navigation } = props;
  const { title } = options;

  const sortMode = useAppSelector(selectSortMode);
  const dispatch = useAppDispatch();

  const handleSortTap = () => {
    dispatch(sortMode === 'asc' ? setSortMode('desc') : setSortMode('asc'));
  };

  let Content: ReactNode | null = null;

  if (title === 'empty') {
    Content = null;
  } else if (title === 'sort') {
    Content = (
      <View style={styles.contentContainer}>
        <CustomButton
          variant="default"
          extraStyle={styles.sortButton}
          handlePress={handleSortTap}
        >
          <SortSvg mode={sortMode} props={{ width: wp(33), height: hp(33) }} />
        </CustomButton>
      </View>
    );
  } else if (title === 'Achievements') {
    Content = (
      <View style={styles.contentContainer}>
        {title && <CustomText extraStyle={styles.title}>{title}</CustomText>}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomButton
        variant="default"
        extraStyle={styles.backButton}
        handlePress={() => navigation.goBack()}
      >
        <Image
          source={BACK_ARROW}
          resizeMode="contain"
          style={styles.backButtonImage}
        />
      </CustomButton>
      {Content}
    </View>
  );
};

export default CustomHeader;
