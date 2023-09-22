import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { addComment } from '../comments';

import { CommentModalVisibility } from './types';

const commentModalInitialState: CommentModalVisibility = { isCommentVisible: false };

export const commentModalSlice = createSlice({
  name: 'commentModal',
  initialState: commentModalInitialState,
  reducers: {
    changeCommentVisibility: (state, action: PayloadAction<CommentModalVisibility>) => {
      state.isCommentVisible = action.payload.isCommentVisible;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addComment.fulfilled, state => {
        state.isCommentVisible = false;
      });
  }
});

export const { changeCommentVisibility } = commentModalSlice.actions;
export default commentModalSlice.reducer;

