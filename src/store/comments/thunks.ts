import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { fetchAddComment, fetchGetComments } from './apis';
import { CreateCommentData } from './types';

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

export const addComment = createAsyncThunk(
  'comments/addComment',
  async (comment: CreateCommentData) => {
    try {
      return fetchAddComment(comment);
    }
    catch(e) {
      if (e instanceof AxiosError) return e.message;
    }
  }
);

