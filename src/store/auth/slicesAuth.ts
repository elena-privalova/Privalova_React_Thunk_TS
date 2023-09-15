import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { removeToken, setToken } from '../../lib/local-storage';

import {
  logInUser,
  getVerifyUser,
  signUpUser,
  refreshAuthUser
} from './thunks';
import {
  AuthState,
  AuthUser,
  VerifyUser
} from './types';

const authInitialState: AuthState = {
  isAuthLoading: false,
  authUser: null,
  authError: '',
  isSuccessRefresh: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    clearAuth: (state, action: PayloadAction<string>) => {
      state.isAuthLoading = false;
      state.authError = '';
      state.isSuccessRefresh = false;
      if (action.payload === 'signup') state.authUser = null;
    },
    logoutUser: (state) => {
      if (typeof removeToken() !== 'string') state.authUser = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isAuthLoading = true;
        state.authError = '';
      })

      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        if (typeof action.payload === 'string') {
          state.authError = action.payload;
        }
        else {
          state.authUser = action.payload as AuthUser;
          state.authError = '';
        }
      })

      .addCase(signUpUser.rejected, (state, action) => {
        state.isAuthLoading = false;
        if (typeof action.error.message === 'string') state.authError = action.error.message;
      })

      .addCase(logInUser.pending, (state) => {
        state.isAuthLoading = true;
        state.authError = '';
      })

      .addCase(logInUser.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        if (typeof action.payload === 'string') {
          state.authError = action.payload;
        }
        else if (action.payload != null && 'accessToken' in action.payload) {
          if (typeof setToken(action.payload.accessToken) !== 'string') {
            state.authUser = action.payload;
            state.authError = '';
          }
        }
      })

      .addCase(logInUser.rejected, (state, action) => {
        state.isAuthLoading = false;
        if (typeof action.error.message === 'string') state.authError = action.error.message;
      })

      .addCase(getVerifyUser.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        if (typeof action.payload !== 'string') {
          state.authUser = action.payload as VerifyUser;
          state.authError = '';
        }
        else {
          state.authUser = null;
        }
      })

      .addCase(refreshAuthUser.pending, state => {
        state.isAuthLoading = true;
        state.authError = '';
        state.isSuccessRefresh = false;
      })

      .addCase(refreshAuthUser.fulfilled, (state, action) => {
        state.isAuthLoading = false;
        if (typeof action.payload === 'string') {
          state.authError = action.payload;
        }
        else {
          state.isSuccessRefresh = true;
          state.authUser = action.payload as VerifyUser;
          state.authError = '';
        }
      })

      .addCase(refreshAuthUser.rejected, (state, action) => {
        state.isAuthLoading = false;
        if (typeof action.error.message === 'string') state.authError = action.error.message;
      });
  }
});

export const {
  clearAuth,
  logoutUser
} = authSlice.actions;
export default authSlice.reducer;

