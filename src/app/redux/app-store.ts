import {
  configureStore,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { rootReducer } from './root-reducer';

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  setupListeners(store.dispatch);

  return store;
};

export const appStore = setupStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
