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
  isDownloaded: false,
  commentsList: [],
  isFailed: false
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {
    getCommetsRequest: state => {
      state.isDownloaded = true;
      state.commentsList = [];
      state.isFailed = false;
    },
    getCommetsSuccess: (state, action) => {
      const comments = commentsArray.filter((element) => element.postId === action.payload);
      state.isDownloaded = false;
      state.commentsList = comments;
      state.isFailed = false;
    },
    getCommetsFail: state => {
      state.isDownloaded = false;
      state.commentsList = [];
      state.isFailed = true;
    }
  }
})

export const { getCommetsRequest, getCommetsSuccess, getCommetsFail } = commentsSlice.actions;
export default commentsSlice.reducer;