import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { removeToken, setToken } from '../../lib/local-storage';

import {
  logInUser,
  getVerifyUser,
  signUpUser
} from './thunks';
import {
  AuthState,
  AuthUser,
  VerifyUser
} from './types';

const authInitialState: AuthState = {
  isLoading: false,
  authUser: null,
  error: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    clearAuth: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = '';
      if (action.payload === 'signup') state.authUser = null;
    },
    logoutUser: (state) => {
      if (typeof removeToken() !== 'string') state.authUser = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') state.error = action.payload;
        else {
          state.authUser = action.payload as AuthUser;
          state.error = '';
        }
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.error.message === 'string') state.error = action.error.message;
      })
      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') state.error = action.payload;
        else if (action.payload != null && 'accessToken' in action.payload!) {
          if (typeof setToken(action.payload.accessToken) !== 'string') {
            state.authUser = action.payload;
            state.error = '';
          }
        }
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.error.message === 'string') state.error = action.error.message;
      })
      .addCase(getVerifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload !== 'string') {
          state.authUser = action.payload as VerifyUser;
          state.error = '';
        }
        else {
          state.authUser = null;
        }
      });
  }
});

export const {
  clearAuth,
  logoutUser
} = authSlice.actions;
export default authSlice.reducer;

