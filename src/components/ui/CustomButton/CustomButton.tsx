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
  variant?: 'default' | 'white' | 'purple' | 'green' | 'red' | 'blue';
  fullWidth?: boolean;
  extraStyle?: StyleProp<ViewStyle>;
}

const variantStyles = {
  white: styles.white,
  default: styles.btn,
  purple: styles.purple,
  green: styles.green,
  red: styles.red,
  blue: styles.blue,
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
        variantStyles[variant],
        extraStyle,
        pressed && styles.btnPressed,
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
