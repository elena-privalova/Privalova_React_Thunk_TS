import { NewsData } from '../../components/PostCard/types';
import api from '../adapter';

import { FetchPostsInterface } from './types';

export const fetchGetPosts = async (): Promise<FetchPostsInterface> => {
  const { data } = await api.get('posts');
  return data;
};

export const fetchGetCard = async (id: number): Promise<NewsData> => {
  const { data } = await api.get(`posts/${id}`);
  return data;
};

