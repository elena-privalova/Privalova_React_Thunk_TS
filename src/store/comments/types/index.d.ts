import { AuthorData } from '../../../components/PostCard/types';

interface CommentsList {
  id: number,
  text: string,
  authorId: number,
  postId: number,
  author: AuthorData,
  createdAt: string,
  updatedAt: string
}

interface CommentsListState {
  isCommentsLoading: boolean,
  commentsList: CommentsList[],
  commentsError: string
}

interface ResponseCommentsList {
  comments: CommentsList[],
  total: number,
}

