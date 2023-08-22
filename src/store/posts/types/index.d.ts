import { NewsInterface } from '../../../components/PostCard/types';

interface PostsState {
  isLoading: boolean,
  postsList: NewsInterface[],
  isError: boolean,
}

interface PostState {
  isLoading: boolean,
  detailCard: NewsInterface
  isError: boolean,
}