import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    getPostsList(state, action) {}
  }
});

const { actions, reducer } = postsSlice;

export const {
  getPostsList
} = actions;
export default reducer;
