import type { ReactNode } from 'react';
import React from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps {
  extraStyle?: StyleProp<ViewStyle>;
  variant: 'white' | 'yellow';
  children?: ReactNode;
}

const variantStyles = {
  white: styles.white,
  yellow: styles.yellow,
};

const CustomContainer = ({
  extraStyle,
  variant,
  children,
}: CustomContainerProps) => {
  return (
    <View style={[styles.container, extraStyle, variantStyles[variant]]}>
      {children}
    </View>
  );
};

export default CustomContainer;
