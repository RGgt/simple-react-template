import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './state';

export const slice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { incrementCounter } = slice.actions;
export default slice.reducer;
