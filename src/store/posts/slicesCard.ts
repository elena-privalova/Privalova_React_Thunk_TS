import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { NewsInterface } from '../../components/PostCard/types';

import { CardState } from './types';
import { arrayNews } from './slicesPosts';

const cardInitialState: CardState = {
  isLoading: false,
  detailCard: null,
  isError: false
}

export const cardSlice = createSlice({
  name: 'card',
  initialState: cardInitialState,
  reducers: {
    getCardRequest: state => {
      state.isLoading = true;
      state.isError = false;
    },
    getCardSuccess: (state, action: PayloadAction<number>) => {
      const searchId: number = action.payload;
      const news: NewsInterface = arrayNews.find((elem) => elem.id === searchId)!;
      state.isLoading = false;
      state.detailCard = news;
      state.isError = false;
    },
    getCardFail: state => {
      state.isLoading = false;
      state.detailCard = cardInitialState.detailCard;
      state.isError = true;
    }   
  }
});

export const { getCardRequest, getCardSuccess, getCardFail } = cardSlice.actions;
export default cardSlice.reducer;