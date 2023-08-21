import { NewsInterface } from "../../../components/PostCard/types";

interface PostState {
  isLoading: boolean,
  postsList: NewsInterface[],
  isError: boolean
}