import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components/ui';
import CustomScreenWrapper from 'src/components/ui/CustomScreenWrapper/CustomScreenWrapper';
import { HOME_IMG } from 'src/constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomScreenWrapper extraStyle={styles.wrapper}>
        <View style={styles.btnContainer}>
          <CustomButton extraStyle={styles.btn}>
            <CustomText extraStyle={styles.btnText}>Articles</CustomText>
          </CustomButton>
          <CustomButton extraStyle={styles.btn}>
            <CustomText extraStyle={styles.btnText}>Check Yourself</CustomText>
          </CustomButton>
          <CustomButton extraStyle={styles.btn}>
            <CustomText extraStyle={styles.btnText}>Favorite</CustomText>
          </CustomButton>
          <CustomButton extraStyle={styles.btn}>
            <CustomText extraStyle={styles.btnText}>Achievements </CustomText>
          </CustomButton>
          <CustomButton extraStyle={styles.btn}>
            <CustomText extraStyle={styles.btnText}>Settings</CustomText>
          </CustomButton>
        </View>
        <View style={styles.imageContainer}>
          <Image source={HOME_IMG} resizeMode="contain" style={styles.image} />
        </View>
      </CustomScreenWrapper>
    </SafeAreaView>
  );
};

export default HomeScreen;
