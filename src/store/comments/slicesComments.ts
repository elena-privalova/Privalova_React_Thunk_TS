import { createSlice } from '@reduxjs/toolkit';

import { CommentsListState } from './types';
import { getComments } from './thunks';

const commentsInitialState: CommentsListState = {
  isDownloaded: false,
  commentsList: [],
  failed: ''
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isDownloaded = true;
        state.failed = '';
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isDownloaded = false;
        if (typeof action.payload === 'string') {
          state.failed = action.payload;
        }
        else if (Array.isArray(action.payload)) {
          state.commentsList = action.payload;
          state.failed = '';
        }
      });
  }
});

export default commentsSlice.reducer;

