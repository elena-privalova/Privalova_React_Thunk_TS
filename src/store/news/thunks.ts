import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { fetchAddNews } from './apis';

export const addNews = createAsyncThunk(
  'post/addNews',
  async (news: AddNewsInterface) => {
    try {
      return await fetchAddNews(news);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

