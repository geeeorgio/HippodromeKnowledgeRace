import { createSelector } from '@reduxjs/toolkit';

import { selectSortMode } from '../filter/selectors';

import type { HistoryPlace } from 'src/constants';
import type { RootState } from 'src/redux/store';

export const selectArticles = (state: RootState) => state.articles.articles;
export const selectCurrentArticle = (state: RootState) =>
  state.articles.currentArticle;
export const selectFavoriteArticles = (state: RootState) =>
  state.articles.favoriteArticles;

export const selectSortedArticles = createSelector(
  selectArticles,
  selectSortMode,
  (articles, sortMode) => {
    return [...articles].sort((a, b) => {
      if (sortMode === 'asc') {
        return a.title.localeCompare(b.title);
      }
      return b.title.localeCompare(a.title);
    });
  },
);

export const selectSortedFavoriteArticles = createSelector(
  selectFavoriteArticles,
  selectSortMode,
  (favoriteArticles, sortMode) => {
    if (!favoriteArticles) {
      return [];
    }
    return [...favoriteArticles].sort((a, b) => {
      if (sortMode === 'asc') {
        return a.title.localeCompare(b.title);
      }
      return b.title.localeCompare(a.title);
    });
  },
);

export const selectIsArticleFavorite = (article: HistoryPlace) =>
  createSelector(selectFavoriteArticles, (favoriteArticles) =>
    favoriteArticles?.some(
      (favoriteArticle) => favoriteArticle.id === article.id,
    ),
  );
