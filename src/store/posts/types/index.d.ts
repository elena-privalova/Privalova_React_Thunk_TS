import { NewsInterface } from '../../../components/PostCard/types';

interface PostsState {
  isLoading: boolean,
  postsList: NewsInterface[]
  isError: boolean,
  searchText: string,
  filterType: string
}

interface CardState {
  isLoading: boolean,
  detailCard: NewsInterface | null
  isError: boolean,
}