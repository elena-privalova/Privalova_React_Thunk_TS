import api from '../adapter';

import {
  CommentData,
  CreateCommentData,
  ResponseCommentsList
} from './types';

export const fetchGetComments = async (id: number): Promise<ResponseCommentsList> => {
  const { data } = await api.get(`comments?postId=${id}`);
  return data;
};

export const fetchAddComment = async (comment: CreateCommentData): Promise<CommentData> => {
  const { data } = await api.post('comments', comment);
  return data;
};

