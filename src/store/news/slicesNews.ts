import { createSlice } from '@reduxjs/toolkit';

import { addNews, editNews } from './thunks';

const newsInitialState: UserNewsState = {
  isUserNewsLoading: false,
  userNewsError: ''
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  reducers: {
    clearNews: state => {
      state.isUserNewsLoading = false;
      state.userNewsError = '';
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addNews.pending, state => {
        state.isUserNewsLoading = true;
        state.userNewsError = '';
      })

      .addCase(addNews.fulfilled, (state, action) => {
        state.isUserNewsLoading = false;
        if (typeof action.payload === 'string') {
          state.userNewsError = action.payload;
        }
        else {
          state.userNewsError = '';
        }
      })

      .addCase(addNews.rejected, (state, action) => {
        state.isUserNewsLoading = false;
        if (typeof action.error.message === 'string') state.userNewsError = action.error.message;
      })

      .addCase(editNews.pending, state => {
        state.isUserNewsLoading = true;
        state.userNewsError = '';
      })

      .addCase(editNews.fulfilled, (state, action) => {
        state.isUserNewsLoading = false;
        if (typeof action.payload === 'string') {
          state.userNewsError = action.payload;
        }
        else {
          state.userNewsError = '';
        }
      })

      .addCase(editNews.rejected, (state, action) => {
        state.isUserNewsLoading = false;
        if (typeof action.error.message === 'string') state.userNewsError = action.error.message;
      });
  }
});

export const { clearNews } = newsSlice.actions;
export default newsSlice.reducer;

