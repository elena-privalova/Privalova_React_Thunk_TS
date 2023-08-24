import { AuthorInterface } from '../../../components/PostCard/types';

interface CommentsInterface {
  id: number,
  text: string,
  authorId: number,
  postId: number,
  author: AuthorInterface,
  createdAt: Date,
  updatedAt?: Date
}

interface CommentsListState {
  isDownloaded: boolean,
  commentsList: CommentsInterface[],
  isFailed: boolean
}