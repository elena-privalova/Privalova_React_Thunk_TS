import { createSlice } from '@reduxjs/toolkit';

import { removeToken, setToken } from '../../lib/local-storage';
import { refreshUser } from '../user';

import {
  logInUser,
  getVerifyUser,
  signUpUser
} from './thunks';
import {
  AuthState,
  VerifyUser
} from './types';

const authInitialState: AuthState = {
  isAuthLoading: false,
  authUser: null,
  authError: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    clearAuth: state => {
      state.isAuthLoading = false;
      state.authError = '';
    },
    logoutUser: state => {
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
        else if (action.payload != null && 'accessToken' in action.payload) {
          if (typeof setToken(action.payload.accessToken) !== 'string') {
            state.authUser = action.payload.user;
            state.authError = '';
          }
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
            state.authUser = action.payload.user;
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

      .addCase(refreshUser.fulfilled, (state, action) => {
        if (typeof action.payload !== 'string') {
          state.authUser = action.payload as VerifyUser;
        }
      });
  }
});

export const { clearAuth, logoutUser } = authSlice.actions;
export default authSlice.reducer;

