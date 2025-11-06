import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface FilterState {
  sortMode: 'asc' | 'desc';
}

const initialState: FilterState = {
  sortMode: 'asc',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortMode: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortMode = action.payload;
    },
    resetSortMode: (state) => {
      state.sortMode = 'asc';
    },
  },
});

export const { setSortMode, resetSortMode } = slice.actions;

export const filterReducer = slice.reducer;
