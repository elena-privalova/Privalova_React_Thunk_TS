import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { fetchGetComments } from './apis';

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (id: number) => {
    try {
      const { comments } = await fetchGetComments(id);
      return comments;
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);
