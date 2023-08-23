import { createSlice } from '@reduxjs/toolkit';

import { CommentsInterface, CommentsListState } from './types';

const commentsArray: CommentsInterface[] = [
  {
    id: 1,
    text: "Просто текст комментария",
    authorId: 1,
    postId: 1,
    author: {
      id: 1,
      email: "v.petrov@test.com",
    },
    createdAt: new Date()
  },
  {
    id: 2,
    text: "Просто текст комментария",
    authorId: 1,
    postId: 1,
    author: {
      id: 1,
      email: "v.petrov@test.com",
    },
    createdAt: new Date()
  }
]

const commentsInitialState: CommentsListState = {
  isLoading: false,
  commentsList: [],
  isError: false
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {
    getCommetsRequest: state => {
      state.isLoading = true;
      state.commentsList = [];
      state.isError = false;
    },
    getCommetsSuccess: state => {
      state.isLoading = false;
      state.commentsList = commentsArray;
      state.isError = false;
    },
    getCommetsFail: state => {
      state.isLoading = false;
      state.commentsList = [];
      state.isError = true;
    }
  }
})

export const { getCommetsRequest, getCommetsSuccess, getCommetsFail } = commentsSlice.actions;
export default commentsSlice.reducer;