import { createSlice } from '@reduxjs/toolkit';

import { VerifyUser } from '../auth/types';

import { UserState } from './types';
import { getUser, getUsersPosts } from './thunks';

const userInitialState: UserState = {
  isLoading: false,
  currentUser: null,
  usersPosts: [],
  error: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') state.error = action.payload;
        else {
          state.currentUser = action.payload as VerifyUser;
          state.error = '';
        }
      })
      .addCase(getUsersPosts.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getUsersPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') state.error = action.payload;
        else if (Array.isArray(action.payload)) {
          state.usersPosts = action.payload;
          state.error = '';
        }
      });
  }
});

export default userSlice.reducer;

