import { createSlice } from '@reduxjs/toolkit';

import { removeToken, setToken } from '../../lib/local-storage';

import { logInUser, getVerifyUser } from './thunks';
import { AuthState, VerifyUser } from './types';

const authInitialState: AuthState = {
  isLoading: false,
  user: null,
  isError: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    clearLogIn: (state) => {
      state.isLoading = false;
      state.isError = '';
    },
    logoutUser: (state) => {
      if (typeof removeToken() !== 'string') state.user = null;
    }
  },
  extraReducers: (builder) => {
      builder
      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') state.isError = action.payload;
        else if (action.payload != undefined && 'accessToken' in action.payload!) {
          if (typeof setToken(action.payload.accessToken) !== 'string') {
            state.user = action.payload;
            state.isError = '';
          }
        }
      })
      .addCase(getVerifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') state.isError = action.payload;
        else {
          state.user = action.payload as VerifyUser;
          state.isError = '';
        }
      })
  },
});

export const { clearLogIn, logoutUser } = authSlice.actions;
export default authSlice.reducer;
