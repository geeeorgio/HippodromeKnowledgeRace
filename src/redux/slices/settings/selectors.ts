import type { RootState } from 'src/redux/store';

export const selectSoundEnabled = (state: RootState) => state.settings.sound;
export const selectVibrationEnabled = (state: RootState) =>
  state.settings.vibration;
