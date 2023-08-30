import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './state';
import { diContainer } from '../../config/dependencyInjection';

export const slice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => {
      console.log(
        '___________________________ON_CLICK__BEGIN___________________________',
      );
      // state.count = state.count + action.payload;
      const counterService = diContainer.resolve('ICounterService');
      state.count = counterService.incrementCounter(
        state.count,
        action.payload,
      );
      console.log(
        '___________________________ON_CLICK__END___________________________',
      );
    },
  },
});

export const { incrementCounter } = slice.actions;
export default slice.reducer;
