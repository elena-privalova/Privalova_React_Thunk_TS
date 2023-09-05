import api from '../adapter';

import {
  AuthUser,
  RequestUser,
  VerifyUser
} from './types';

export const fetchSignUpUser = async (user: RequestUser): Promise<AuthUser> => {
  const { data } = await api.post('auth/signup', user);
  return data;
};

export const fetchLogInUser = async (user: RequestUser): Promise<AuthUser> => {
  const { data } = await api.post('auth/login', user);
  return data;
};

export const fetchVerifyUser = async (): Promise<VerifyUser> => {
  const { data } = await api.get('auth/whoami');
  return data;
};

