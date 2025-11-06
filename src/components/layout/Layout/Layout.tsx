import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { MAIN_BACKGROUND } from 'src/constants';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

export default Layout;
