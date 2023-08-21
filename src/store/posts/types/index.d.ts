import { NewsInterface } from "../../../components/PostCard/types";

interface StateInterface {
  isLoading: boolean,
  postsList: NewsInterface[],
  isError: boolean
}