import { AuthorInterface } from '../../../components/PostCard/types';

interface CommentsInterface {
  id: number,
  text: string,
  authorId: number,
  postId: number,
  author: AuthorInterface,
  createdAt: string,
  updatedAt: string
};

interface CommentsListState {
  isDownloaded: boolean,
  commentsList: CommentsInterface[],
  failed: string
};

interface FetchCommentsInterface {
  comments: CommentsInterface[],
  total: number,
};
