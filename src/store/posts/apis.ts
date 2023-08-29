import axios from 'axios';

import { FetchDataInterface } from './types';

const postsApi = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });

export const fetchGetPosts = async (): Promise<FetchDataInterface> => {
  const { data } = await postsApi.get('posts');
  return data;
}
