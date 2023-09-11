import api from '../adapter';

export const fetchAddNews = async (news: AddNewsInterface) => {
  const { data } = await api.post(
    'posts',
    news,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return data;
};

