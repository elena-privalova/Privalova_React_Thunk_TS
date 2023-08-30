import { NewsInterface } from '../../components/PostCard/types';

import { api } from '../adapter';

import { FetchPostsInterface } from './types';

export const fetchGetPosts = async (): Promise<FetchPostsInterface> => {
  const { data } = await api.get('posts');
  return data;
};

export const fetchGetCard = async (id: number): Promise<NewsInterface> => {
  const { data } = await api.get(`posts/${id}`);
  return data;
};
