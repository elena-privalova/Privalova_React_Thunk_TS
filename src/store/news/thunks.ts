import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { fetchAddNews, fetchEditNews } from './apis';

export const addNews = createAsyncThunk(
  'post/addNews',
  async (news: AddNewsData) => {
    try {
      return fetchAddNews(news);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

export const editNews = createAsyncThunk(
  'post/editNews',
  async (news: RequestEditNewsData) => {
    try {
      return fetchEditNews(news);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

