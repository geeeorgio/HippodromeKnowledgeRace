import React from 'react';
import { Modal, Pressable, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface ExitQuizDialogProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ExitQuizDialog = ({
  visible,
  onConfirm,
  onCancel,
}: ExitQuizDialogProps) => {
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
            <CustomText extraStyle={styles.title}>Exit the Quiz?</CustomText>
            <CustomText extraStyle={styles.message}>
              Are you sure you want to quit? Your current progress will not be
              saved.
            </CustomText>

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
          </CustomContainer>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ExitQuizDialog;
