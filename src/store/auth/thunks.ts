import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import {
  fetchLogInUser,
  fetchRefreshAuthUser,
  fetchSignUpUser,
  fetchVerifyUser
} from './apis';
import { RequestRefreshUser, RequestUser } from './types';

export const signUpUser = createAsyncThunk(
  'auth/signupUser',
  async (user: RequestUser) => {
    try {
      return fetchSignUpUser(user);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/loginUser',
  async (user: RequestUser) => {
    try {
      return fetchLogInUser(user);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

export const getVerifyUser = createAsyncThunk(
  'auth/verifyUser',
  async () => {
    try {
      return fetchVerifyUser();
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

export const refreshAuthUser = createAsyncThunk(
  'users/refreshAuthUser',
  async (user: RequestRefreshUser) => {
    try {
      return fetchRefreshAuthUser(user);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

