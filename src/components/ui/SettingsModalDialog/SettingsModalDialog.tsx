import React from 'react';
import { Modal, Pressable, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface SettingsModalDialogProps {
  visible: boolean;
  onCancel: () => void;
  label: string;
  description: string;
  onConfirm: () => void;
}

const SettingsModalDialog = ({
  visible,
  onCancel,
  label,
  description,
  onConfirm,
}: SettingsModalDialogProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <Pressable style={styles.overlay} onPress={onCancel}>
        <Pressable onPress={(e) => e.stopPropagation()}>
          <CustomContainer variant="white" extraStyle={styles.dialog}>
            <CustomText extraStyle={styles.title}>{label}</CustomText>
            <CustomText extraStyle={styles.description}>
              {description}
            </CustomText>
          </CustomContainer>

          <View style={styles.buttonsContainer}>
            <CustomButton
              variant="red"
              handlePress={onConfirm}
              extraStyle={styles.button}
            >
              <CustomText extraStyle={styles.confirmText}>Confirm</CustomText>
            </CustomButton>
            <CustomButton
              variant="green"
              handlePress={onCancel}
              extraStyle={styles.button}
            >
              <CustomText extraStyle={styles.cancelText}>Cancel</CustomText>
            </CustomButton>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default SettingsModalDialog;
