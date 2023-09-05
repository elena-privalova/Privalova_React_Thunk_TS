import { PayloadAction } from '@reduxjs/toolkit';

import { NewsInterface } from '../../../components/PostCard/types';

interface PostsState {
  isLoading: boolean,
  postsList: NewsInterface[],
  error: string,
  searchText: string,
  filterType: string,
};

interface CardState {
  isLoading: boolean,
  detailCard: NewsInterface | null,
  error: string,
};

interface ActionSearchState {
  payload: string,
  type: string,
};

interface FetchPostsInterface {
  posts: NewsInterface[],
  total: number,
};

