import { createSlice } from '@reduxjs/toolkit';

import { ActionSearchState, PostsState } from './types';
import { getPosts } from './thunks';

const postsInitialState: PostsState = {
  isLoading: false,
  postsList: [],
  error: '',
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
        state.error = '';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }
        else if (Array.isArray(action.payload)) {
          state.postsList = action.payload;
          state.error = '';
        }
      })
  }
});

export const { 
  setSearchText, 
  setFilterType, 
} = postsSlice.actions;
export default postsSlice.reducer;
