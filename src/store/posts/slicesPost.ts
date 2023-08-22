import { createSlice } from '@reduxjs/toolkit';

import { NewsInterface } from '../../components/PostCard/types';

import { PostState } from './types';
import { arrayNews } from './slicesPosts';

const PostInitialState: PostState = {
  isLoading: false,
  detailCard: {
    id: 0,
    title: '',
    text: '',
    coverPath: '',
    author: {
      id: 0,
      email: ''
    },
    tags: [],
    rating: 0,
    commentsCount: 0,
    createdAt: new Date('0000-01-01')
  },
  isError: false
}

export const postSlice = createSlice({
  name: 'post',
  initialState: PostInitialState,
  reducers: {
    getPostRequest: state => {
      state.isLoading = true;
      state.detailCard = state.detailCard;
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
      state.detailCard = state.detailCard;
      state.isError = true;
    }   
  }
});

export const { getPostRequest, getPostSuccess, getPostFail } = postSlice.actions;
export default postSlice.reducer;