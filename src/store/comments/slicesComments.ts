import { createSlice } from '@reduxjs/toolkit';

import { CommentsListState } from './types';
import { getComments } from './thunks';

const commentsInitialState: CommentsListState = {
  isDownloaded: false,
  commentsList: [],
  isFailed: '',
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(getComments.pending, (state) => {
          state.isDownloaded = true;
          state.isFailed = '';
        })
        .addCase(getComments.fulfilled, (state, action) => {
          state.isDownloaded = false;
          if (Array.isArray(action.payload)) state.commentsList = action.payload;
          state.isFailed = '';
        })
        .addCase(getComments.rejected, (state, action) => {
          state.isDownloaded = false;
          if (typeof action.payload === 'string') state.isFailed = action.payload;
        })
  },
});

export default commentsSlice.reducer;
