import { createSlice } from '@reduxjs/toolkit';

import { signUpUser } from './thunks';
import { AuthState, AuthUser } from './types';

const signUpInitialState: AuthState = {
  isLoading: false,
  user: null,
  isError: ''
}

export const signUpSlice = createSlice({
  name: 'signup',
  initialState: signUpInitialState,
  reducers: {
    clearSignUp: (state) => {
      state.isLoading = false;
      state.isError = '';
    }
  },
  extraReducers: (builder) => {
      builder
        .addCase(signUpUser.pending, (state) => {
          state.isLoading = true;
          state.isError = '';
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
          state.isLoading = false;
          if (typeof action.payload === 'string') state.isError = action.payload;
          else {
            state.user = action.payload as AuthUser;
            state.isError = ''
          };
        })
  },
});

export const { clearSignUp } = signUpSlice.actions;
export default signUpSlice.reducer;
