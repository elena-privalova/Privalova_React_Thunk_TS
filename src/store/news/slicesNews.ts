import { createSlice } from '@reduxjs/toolkit';

import { addNews } from './thunks';

const newsInitialState: AddNewsState = {
  isAddNewsLoading: false,
  news: null,
  addNewsError: ''
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  reducers: {
    clearNews: state => {
      state.isAddNewsLoading = false;
      state.news = null;
      state.addNewsError = '';
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addNews.pending, state => {
        state.isAddNewsLoading = true;
        state.addNewsError = '';
      })

      .addCase(addNews.fulfilled, (state, action) => {
        state.isAddNewsLoading = false;
        if (typeof action.payload === 'string') {
          state.addNewsError = action.payload;
        }
        else {
          state.news = action.payload;
          state.addNewsError = '';
        }
      })

      .addCase(addNews.rejected, (state, action) => {
        state.isAddNewsLoading = false;
        if (typeof action.error.message === 'string') state.addNewsError = action.error.message;
      });
  }
});

export const { clearNews } = newsSlice.actions;
export default newsSlice.reducer;

