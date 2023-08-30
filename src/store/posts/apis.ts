import axios from 'axios';

import { NewsInterface } from '../../components/PostCard/types';

import { FetchPostsInterface } from './types';

const postsApi = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });

export const fetchGetPosts = async (): Promise<FetchPostsInterface> => {
  const { data } = await postsApi.get('posts');
  return data;
};

export const fetchGetCard = async (id: number): Promise<NewsInterface> => {
  const { data } = await postsApi.get(`posts/${id}`);
  return data;
};
