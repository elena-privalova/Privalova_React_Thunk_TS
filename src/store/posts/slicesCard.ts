import { createSlice } from '@reduxjs/toolkit';

import { NewsInterface } from '../../components/PostCard/types';

import { CardState } from './types';
import { arrayNews } from './slicesPosts';

const cardInitialState: CardState = {
  isLoading: false,
  detailCard: null,
  isError: false
}

export const cardSlice = createSlice({
  name: 'post',
  initialState: cardInitialState,
  reducers: {
    getPostRequest: state => {
      state.isLoading = true;
      state.isError = false;
    },
    getPostSuccess: (state, action) => {
      const searchId = Number(action.payload);
      const news: NewsInterface = arrayNews.filter(elem => elem.id === searchId)[0];
      state.isLoading = false;
      state.detailCard = news;
      state.isError = false;
    },
    getPostFail: state => {
      state.isLoading = false;
      state.detailCard = cardInitialState.detailCard;
      state.isError = true;
    }   
  }
});

export const { getPostRequest, getPostSuccess, getPostFail } = cardSlice.actions;
export default cardSlice.reducer;