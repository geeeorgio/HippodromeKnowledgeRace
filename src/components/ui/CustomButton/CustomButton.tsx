import type { ReactNode } from 'react';
import React from 'react';
import type { Insets, StyleProp, ViewStyle } from 'react-native';
import { Pressable } from 'react-native';

import { styles } from './styles';

interface CustomButtonProps {
  children: ReactNode;
  handlePress?: () => void;
  isDisabled?: boolean;
  distance?: Insets;
  variant?: 'white' | 'purple' | 'green' | 'red';
  fullWidth?: boolean;
  extraStyle?: StyleProp<ViewStyle>;
}

const variantStyles = {
  white: styles.white,
  purple: styles.purple,
  green: styles.green,
  red: styles.red,
};

const CustomButton = ({
  children,
  handlePress,
  isDisabled = false,
  distance = { top: 10, bottom: 10, left: 10, right: 10 },
  variant = 'purple',
  fullWidth = false,
  extraStyle,
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        extraStyle,
        pressed && styles.btnPressed,
        variantStyles[variant],
        fullWidth && { alignSelf: 'stretch' },
        isDisabled && styles.btnDisabled,
      ]}
      onPress={handlePress}
      disabled={isDisabled}
      hitSlop={distance}
    >
      {children}
    </Pressable>
  );
};

export default CustomButton;
