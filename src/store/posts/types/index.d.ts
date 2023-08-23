import { NewsInterface } from '../../../components/PostCard/types';

interface PostsState {
  isLoading: boolean,
  postsList: NewsInterface[],
  isError: boolean,
}

interface CardState {
  isLoading: boolean,
  detailCard: NewsInterface | null
  isError: boolean,
}