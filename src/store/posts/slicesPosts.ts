import { createSlice } from '@reduxjs/toolkit';

import { NewsInterface } from '../../components/PostCard/types';

import { PostsState } from './types';

export const arrayNews: NewsInterface[] = [ 
  {
    id: 1,
    title: 'Shrimp and Chorizo Paella',
    text: `This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like`,
    coverPath: '',
    author: {
      id: 1,
      email: 'privalov_ivan@mail.ru'
    },
    tags: [
      {
        id: 1,
        value: '#1',
      },
      {
        id: 2,
        value: '#2',
      },
      {
        id: 3,
        value: '#3',
      },
    ],
    rating: 4,
    commentsCount: 7,
    createdAt: new Date()
  },
  {
    id: 2,
    title: 'Shrimp and Chorizo Paella',
    text: `This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.`,
    coverPath: '',
    author: {
      id: 2,
      email: 'privalov_ivan@mail.ru'
    },
    tags: [
      {
        id: 1,
        value: '#4',
      },
      {
        id: 2,
        value: '#5',
      },
      {
        id: 3,
        value: '#6',
      },
    ],
    rating: 5,
    commentsCount: 15,
    createdAt: new Date()
  }
];

const postsInitialState: PostsState = {
  isLoading: false,
  postsList: [],
  isError: false
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    getPostsRequest: state => {
      state.isLoading = true;
      state.postsList = arrayNews;
      state.isError = false;
    },
    getPostsSuccess: state => {
      state.isLoading = false;
      state.postsList = arrayNews;
      state.isError = false;
    },
    getPostsFail: state => {
      state.isLoading = false;
      state.postsList = arrayNews;
      state.isError = true;
    }   
  }
});

export const { getPostsRequest, getPostsSuccess, getPostsFail } = postsSlice.actions;
export default postsSlice.reducer;