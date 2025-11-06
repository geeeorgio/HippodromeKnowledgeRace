import { Vibration } from 'react-native';

export const vibrateForCorrect = () => {
  Vibration.vibrate(100);
};

export const vibrateForIncorrect = () => {
  Vibration.vibrate([100, 50, 100]);
};
