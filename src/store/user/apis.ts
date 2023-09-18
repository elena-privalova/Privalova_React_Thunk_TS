import { ResponsePostsList } from '../posts/types';
import { VerifyUser } from '../auth/types';
import api from '../adapter';

import { RefreshUser, RequestRefreshUser } from './types';

export const fetchGetUser = async (id: number): Promise<VerifyUser> => {
  const { data } = await api.get(`users/${id}`);
  return data;
};

export const fetchGetUsersPosts = async (id: number): Promise<ResponsePostsList> => {
  const { data } = await api.get(`posts?authorId=${id}`);
  return data;
};

export const fetchRefreshUser = async (user: RequestRefreshUser): Promise<RefreshUser> => {
  const { data } = await api.patch(
    `users/${user.id}`,
    user.refreshUser,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return data;
};

