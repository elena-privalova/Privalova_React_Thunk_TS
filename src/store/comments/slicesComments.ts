import { createSlice } from '@reduxjs/toolkit';

import { CommentData, CommentsListState } from './types';
import { addComment, getComments } from './thunks';

const commentsInitialState: CommentsListState = {
  isCommentsLoading: false,
  comment: null,
  commentsList: [],
  commentsError: ''
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {
    clearComment: state => {
      state.isCommentsLoading = false;
      state.commentsError = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isCommentsLoading = true;
        state.commentsList = [];
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
      })

      .addCase(addComment.pending, state => {
        state.isCommentsLoading = true;
        state.commentsError = '';
      })

      .addCase(addComment.fulfilled, (state, action) => {
        state.isCommentsLoading = false;
        if (typeof action.payload === 'string') {
          state.commentsError = action.payload;
        }
        else {
          state.comment = action.payload as CommentData;
          state.commentsList = [
            state.comment,
            ...state.commentsList
          ];
          state.commentsError = '';
        }
      })

      .addCase(addComment.rejected, (state, action) => {
        state.isCommentsLoading = false;
        if (typeof action.error.message === 'string') state.commentsError = action.error.message;
      });
  }
});

export const { clearComment } = commentsSlice.actions;
export default commentsSlice.reducer;

