import axios from 'axios';

import { getToken } from '../lib/local-storage';

const api = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });

api.interceptors.request.use((config) => {
  const token = getToken();
  if (typeof token === 'string') {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

