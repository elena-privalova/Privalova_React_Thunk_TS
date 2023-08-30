import { createSlice } from '@reduxjs/toolkit';

import { ActionSearchState, PostsState } from './types';
import { getPosts } from './thunks';

const postsInitialState: PostsState = {
  isLoading: false,
  postsList: [],
  isError: '',
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.postsList = [];
        state.isError = '';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(action.payload)) state.postsList = action.payload;
        state.isError = '';
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.postsList = [];
        if (typeof action.payload === 'string') state.isError = action.payload;
      })
  }
});

export const { 
  setSearchText, 
  setFilterType, 
} = postsSlice.actions;
export default postsSlice.reducer;
