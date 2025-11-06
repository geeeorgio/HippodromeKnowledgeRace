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

import { loaderReducer } from './slices/loader/slice';
import { onboardingReducer } from './slices/onboarding/slice';

const persistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
};

const onboardingPersistedReducer = persistReducer(
  persistConfig,
  onboardingReducer,
);

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    onboarding: onboardingPersistedReducer,
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
