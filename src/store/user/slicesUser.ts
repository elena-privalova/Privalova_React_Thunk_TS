import { createSlice } from '@reduxjs/toolkit';

import { VerifyUser } from '../auth/types';

import { UserState } from './types';
import { getUser, getUsersPosts } from './thunks';

const userInitialState: UserState = {
  isUserLoading: false,
  currentUser: null,
  usersPosts: [],
  userError: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.isUserLoading = true;
        state.userError = '';
      })

      .addCase(getUser.fulfilled, (state, action) => {
        state.isUserLoading = false;
        if (typeof action.payload === 'string') state.userError = action.payload;
        else {
          state.currentUser = action.payload as VerifyUser;
          state.userError = '';
        }
      })

      .addCase(getUser.rejected, (state, action) => {
        state.isUserLoading = false;
        if (typeof action.error.message === 'string') state.userError = action.error.message;
      })

      .addCase(getUsersPosts.pending, (state) => {
        state.isUserLoading = true;
        state.userError = '';
      })

      .addCase(getUsersPosts.fulfilled, (state, action) => {
        state.isUserLoading = false;
        if (typeof action.payload === 'string') state.userError = action.payload;
        else if (Array.isArray(action.payload)) {
          state.usersPosts = action.payload;
          state.userError = '';
        }
      });
  }
});

export default userSlice.reducer;

