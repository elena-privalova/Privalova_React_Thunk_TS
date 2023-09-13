import { NewsData } from '../../../components/PostCard/types';

interface PostsState {
  isPostsLoading: boolean,
  postsList: NewsData[],
  postsError: string,
  searchText: string,
  filterType: string,
}

interface CardState {
  isCardLoading: boolean,
  detailCard: NewsData | null,
  cardError: string,
}

interface ActionSearchState {
  payload: string,
  type: string,
}

interface ResponsePostsList {
  posts: NewsData[],
  total: number,
}

