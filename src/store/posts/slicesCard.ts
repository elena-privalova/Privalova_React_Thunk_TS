import { createSlice } from '@reduxjs/toolkit';

import { NewsInterface } from '../../components/PostCard/types';

import { CardState } from './types';
import { getCard } from './thunks';

const cardInitialState: CardState = {
  isLoading: false,
  detailCard: null,
  error: ''
};

export const cardSlice = createSlice({
  name: 'card',
  initialState: cardInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getCard.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }
        else {
          state.detailCard = action.payload as NewsInterface;
          state.error = '';
        }
      })
  }
});

export default cardSlice.reducer;

