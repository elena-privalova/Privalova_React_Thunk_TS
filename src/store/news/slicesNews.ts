import { createSlice } from '@reduxjs/toolkit';

import { addNews } from './thunks';

const newsInitialState: NewsState = {
  isLoading: false,
  news: null,
  error: ''
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  reducers: {
    clearNews: state => {
      state.isLoading = false;
      state.news = null;
      state.error = '';
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addNews.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') state.error = action.payload;
        else {
          state.news = action.payload;
          state.error = '';
        }
      });
  }
});

export const { clearNews } = newsSlice.actions;
export default newsSlice.reducer;

