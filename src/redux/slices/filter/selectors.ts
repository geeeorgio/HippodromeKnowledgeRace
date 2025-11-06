import type { RootState } from 'src/redux/store';

export const selectSortMode = (state: RootState) => state.filter.sortMode;
