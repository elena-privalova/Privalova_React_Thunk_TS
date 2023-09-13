import { createSlice } from '@reduxjs/toolkit';

import { CommentsListState } from './types';
import { getComments } from './thunks';

const commentsInitialState: CommentsListState = {
  isCommentsLoading: false,
  commentsList: [],
  commentsError: ''
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isCommentsLoading = true;
        state.commentsError = '';
      })

      .addCase(getComments.fulfilled, (state, action) => {
        state.isCommentsLoading = false;
        if (typeof action.payload === 'string') {
          state.commentsError = action.payload;
        }
        else if (Array.isArray(action.payload)) {
          state.commentsList = action.payload;
          state.commentsError = '';
        }
      });
  }
});

export default commentsSlice.reducer;

