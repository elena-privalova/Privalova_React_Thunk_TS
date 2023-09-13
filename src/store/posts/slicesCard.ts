import { createSlice } from '@reduxjs/toolkit';

import { NewsData } from '../../components/PostCard/types';

import { CardState } from './types';
import { getCard } from './thunks';

const cardInitialState: CardState = {
  isCardLoading: false,
  detailCard: null,
  cardError: ''
};

export const cardSlice = createSlice({
  name: 'card',
  initialState: cardInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.isCardLoading = true;
        state.cardError = '';
      })

      .addCase(getCard.fulfilled, (state, action) => {
        state.isCardLoading = false;
        if (typeof action.payload === 'string') {
          state.cardError = action.payload;
        }
        else {
          state.detailCard = action.payload as NewsData;
          state.cardError = '';
        }
      })

      .addCase(getCard.rejected, (state, action) => {
        state.isCardLoading = false;
        if (typeof action.error.message === 'string') state.cardError = action.error.message;
      });
  }
});

export default cardSlice.reducer;

