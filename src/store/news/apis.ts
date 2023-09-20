import { NewsData } from '../../components/PostCard/types';
import api from '../adapter';

export const fetchAddNews = async (news: AddNewsData): Promise<NewsData> => {
  const { data } = await api.post(
    'posts',
    news,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return data;
};

export const fetchEditNews = async (news: RequestEditNewsData): Promise<NewsData> => {
  const { data } = await api.patch(
    `posts/${news.id}`,
    news.userNews,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return data;
};

