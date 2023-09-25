import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { fetchAddRating, fetchGetCard, fetchGetPosts } from './apis';
import { RequestAddRating } from './types';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    try {
      const { posts } = await fetchGetPosts();
      return posts;
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

export const getCard = createAsyncThunk(
  'posts/getNews',
  async (id: number) => {
    try {
      return fetchGetCard(id);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

export const addRating = createAsyncThunk(
  'ratings/addRating',
  async (rating: RequestAddRating) => {
    try {
      return fetchAddRating(rating);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

