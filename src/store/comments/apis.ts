import axios from 'axios';

import { FetchCommentsInterface } from './types';

const commentsApi = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });

export const fetchGetComments = async (id: number): Promise<FetchCommentsInterface> => {
  const { data } = await commentsApi.get(`comments?postId=${id}`);
  return data;
};
