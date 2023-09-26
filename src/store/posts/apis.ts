import { NewsData } from '../../components/PostCard/types';
import api from '../adapter';

import {
  RequestAddRating,
  ResponsePostsList,
  ResponseRatingData
} from './types';

export const fetchGetPosts = async (): Promise<ResponsePostsList> => {
  const { data } = await api.get('posts?limit=4');
  return data;
};

export const fetchGetCard = async (id: number): Promise<NewsData> => {
  const { data } = await api.get(`posts/${id}`);
  return data;
};

export const fetchAddRating = async (rating: RequestAddRating): Promise<ResponseRatingData> => {
  const { data } = await api.post('ratings', rating);
  console.log(data);
  return data;
};

