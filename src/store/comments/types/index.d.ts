import { AuthorData } from '../../../components/PostCard/types';

interface CommentData {
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
  comment: CommentData | null,
  commentsList: CommentData[],
  commentsError: string
}

interface ResponseCommentsList {
  comments: CommentData[],
  total: number,
}

interface CreateCommentData {
  text: string,
  postId: number,
}

interface PaginationState {
  activePage: number,
  pagesArray: number[]
}

