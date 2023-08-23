import { type FC } from 'react';

import { CommentsInterface } from '../../store/comments/types';

import { StyledItem } from './styles';

const CommentItem: FC<CommentsInterface>  = (props) => {
  return (
    <StyledItem>{props.text}</StyledItem>
  );
}

export default CommentItem;
