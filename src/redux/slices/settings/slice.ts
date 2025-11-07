import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface SettingsState {
  sound: boolean;
  vibration: boolean;
}

const initialState: SettingsState = {
  sound: true,
  vibration: true,
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSound: (state, action: PayloadAction<boolean>) => {
      state.sound = action.payload;
    },
    setVibration: (state, action: PayloadAction<boolean>) => {
      state.vibration = action.payload;
    },
  },
});

export const { setSound, setVibration } = slice.actions;

export const settingsReducer = slice.reducer;
