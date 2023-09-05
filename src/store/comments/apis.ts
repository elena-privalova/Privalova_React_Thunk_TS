import api from '../adapter';

import { FetchCommentsInterface } from './types';

export const fetchGetComments = async (id: number): Promise<FetchCommentsInterface> => {
  const { data } = await api.get(`comments?postId=${id}`);
  return data;
};

