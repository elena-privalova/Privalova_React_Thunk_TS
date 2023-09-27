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

interface RequestAddRating {
  postId: number,
  value: number,
}

interface ResponseRatingData {
  id: number,
  postId: number,
  value: number,
  userId: number,
  createdAt: string,
  updatedAt: string,
}

