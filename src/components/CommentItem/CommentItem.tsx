import { type FC } from 'react';
import { Avatar } from '@mui/material';

import { CommentsInterface } from '../../store/comments/types';
import { getFormattedDate } from '../../utils/getFormattedDate';

import { StyledItem, StyledItemHeader } from './styles';

const CommentItem: FC<CommentsInterface>  = (props) => {
  return (
    <StyledItem>
      <StyledItemHeader>
        <Avatar alt="Avatar Image" src={`${import.meta.env.VITE_APP_API_URL}${props.author.avatarPath}`} />
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
