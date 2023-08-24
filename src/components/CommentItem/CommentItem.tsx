import { type FC } from 'react';
import { Avatar } from '@mui/material';

import { CommentsInterface } from '../../store/comments/types';
import { getFormattedDate } from '../../utils/getFormattedDate';

import { StyledItem, StyledItemHeader } from './styles';

const CommentItem: FC<CommentsInterface>  = (props) => {
  return (
    <StyledItem>
      <StyledItemHeader>
        <Avatar>{props.author.avatarPath}</Avatar>
        <span>{props.author.email}</span>
      </StyledItemHeader>
      <div>
        {props.text}
      </div>
      <span>{getFormattedDate(props.createdAt)}</span>
    </StyledItem>
  );
}

export default CommentItem;
