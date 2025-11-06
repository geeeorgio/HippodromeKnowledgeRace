import { createSlice } from '@reduxjs/toolkit';

import type { HistoryPlace } from 'src/constants';
import { HISTORY_PLACES } from 'src/constants';

interface ArticlesState {
  articles: HistoryPlace[];
  currentArticle: HistoryPlace | undefined;
  favoriteArticles: HistoryPlace[] | undefined;
}

const initialState: ArticlesState = {
  articles: HISTORY_PLACES,
  currentArticle: undefined,
  favoriteArticles: [],
};

const slice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCurrentArticle: (state, action) => {
      state.currentArticle = action.payload;
    },
    resetCurrentArticle: (state) => {
      state.currentArticle = undefined;
    },
    addFavoriteArticle: (state, action) => {
      state.favoriteArticles?.push(action.payload);
    },
    removeFavoriteArticle: (state, action) => {
      state.favoriteArticles = state.favoriteArticles?.filter(
        (article) => article.id !== action.payload.id,
      );
    },
    resetArticles: (state) => {
      state.articles = HISTORY_PLACES;
      state.currentArticle = undefined;
      state.favoriteArticles = [];
    },
  },
});

export const {
  setCurrentArticle,
  addFavoriteArticle,
  removeFavoriteArticle,
  resetArticles,
  resetCurrentArticle,
} = slice.actions;

export const articlesReducer = slice.reducer;
