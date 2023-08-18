import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    value: []
  },
  reducers: {
    getPostsList: (state, action) => {
      switch (action.type) {
        case 'fulfilled':
          state.value = action.payload;
          break;
        default:
          state.value = state.value;
      }
      
    }
  }
});

export const { getPostsList } = postsSlice.actions;
export default postsSlice.reducer;

// const { actions, reducer } = postsSlice;

// export const {
//   getPostsList
// } = actions;
// export default reducer;
