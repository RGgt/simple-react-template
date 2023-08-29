import { configureStore } from '@reduxjs/toolkit';
import MainReducer from './MainSlice/reducer';

export const store = configureStore({
  reducer: {
    mainSlice: MainReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
