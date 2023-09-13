import { createSlice } from '@reduxjs/toolkit';

import { ActionSearchState, PostsState } from './types';
import { getPosts } from './thunks';

const postsInitialState: PostsState = {
  isPostsLoading: false,
  postsList: [],
  postsError: '',
  searchText: '',
  filterType: 'all'
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    setSearchText: (state, action: ActionSearchState) => {
      state.searchText = action.payload;
    },
    setFilterType: (state, action: ActionSearchState) => {
      state.filterType = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isPostsLoading = true;
        state.postsList = [];
        state.postsError = '';
      })

      .addCase(getPosts.fulfilled, (state, action) => {
        state.isPostsLoading = false;
        if (typeof action.payload === 'string') {
          state.postsError = action.payload;
        }
        else if (Array.isArray(action.payload)) {
          state.postsList = action.payload;
          state.postsError = '';
        }
      });
  }
});

export const {
  setSearchText,
  setFilterType
} = postsSlice.actions;
export default postsSlice.reducer;

