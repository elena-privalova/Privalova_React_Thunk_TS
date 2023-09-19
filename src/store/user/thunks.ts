import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import {
  fetchGetUser,
  fetchGetUsersPosts,
  fetchRefreshUser
} from './apis';
import { RequestRefreshUser } from './types';

export const getUser = createAsyncThunk(
  'users/getUser',
  async (id: number) => {
    try {
      return fetchGetUser(id);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

export const getUsersPosts = createAsyncThunk(
  'users/getUsersPosts',
  async (id: number) => {
    try {
      const { posts } = await fetchGetUsersPosts(id);
      return posts;
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

export const refreshUser = createAsyncThunk(
  'users/refreshUser',
  async (user: RequestRefreshUser) => {
    try {
      return fetchRefreshUser(user);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

