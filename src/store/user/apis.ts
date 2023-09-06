import { FetchPostsInterface } from '../posts/types';
import api from '../adapter';
import { VerifyUser } from '../auth/types';

export const fetchGetUser = async (id: number): Promise<VerifyUser> => {
  const { data } = await api.get(`users/${id}`);
  return data;
};

export const fetchGetUsersPosts = async (id: number): Promise<FetchPostsInterface> => {
  const { data } = await api.get(`posts?authorId=${id}`);
  return data;
};

