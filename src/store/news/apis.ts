import api from '../adapter';

export const fetchAddNews = async (news: AddNewsData) => {
  const { data } = await api.post(
    'posts',
    news,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return data;
};

