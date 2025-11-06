import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { achievementsReducer } from './slices/achievements/slice';
import { articlesReducer } from './slices/articles/slice';
import { filterReducer } from './slices/filter/slice';
import { loaderReducer } from './slices/loader/slice';
import { onboardingReducer } from './slices/onboarding/slice';
import { quizReducer } from './slices/quiz/slice';

const onboardingPersistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
};

const articlesPersistConfig = {
  key: 'articles',
  storage: AsyncStorage,
};

const achievementsPersistConfig = {
  key: 'achievements',
  storage: AsyncStorage,
};

const onboardingPersistedReducer = persistReducer(
  onboardingPersistConfig,
  onboardingReducer,
);

const articlesPersistedReducer = persistReducer(
  articlesPersistConfig,
  articlesReducer,
);

const achievementsPersistedReducer = persistReducer(
  achievementsPersistConfig,
  achievementsReducer,
);

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    onboarding: onboardingPersistedReducer,
    articles: articlesPersistedReducer,
    achievements: achievementsPersistedReducer,
    filter: filterReducer,
    quiz: quizReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
