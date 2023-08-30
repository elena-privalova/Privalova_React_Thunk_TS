import { PayloadAction } from '@reduxjs/toolkit';

import { NewsInterface } from '../../../components/PostCard/types';

interface PostsState {
  isLoading: boolean,
  postsList: NewsInterface[],
  isError: string,
  searchText: string,
  filterType: string,
};

interface CardState {
  isLoading: boolean,
  detailCard: NewsInterface | null,
  isError: string,
};

interface ActionSearchState {
  payload: string,
  type: string,
};

interface FetchPostsInterface {
  posts: NewsInterface[],
  total: number,
};
