import { createSlice } from '@reduxjs/toolkit';

import { NewsInterface } from '../../components/PostCard/types';

import { CardState } from './types';
import { getCard } from './thunks';

const cardInitialState: CardState = {
  isLoading: false,
  detailCard: null,
  isError: ''
};

export const cardSlice = createSlice({
  name: 'card',
  initialState: cardInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(getCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detailCard = action.payload as NewsInterface;
        state.isError = '';
      })
      .addCase(getCard.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') state.isError = action.payload;
      })
  }
});

export default cardSlice.reducer;
