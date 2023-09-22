import { type FC } from 'react';
import { Avatar } from '@mui/material';

import { getFormattedDate } from '../../utils/getFormattedDate';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';

import { StyledItem, StyledItemHeader } from './styles';
import { CommentItemProps } from './types';

const CommentItem: FC<CommentItemProps>  = ({ comment }) => {
  return (
    <StyledItem>
      <StyledItemHeader>
        <Avatar
          alt="Avatar Image"
          src={getFormattedAvatarPath(comment.author.avatarPath)}
        />
        <span>{comment.author.email}</span>
      </StyledItemHeader>
      <div>
        {comment.text}
      </div>
      <span>{getFormattedDate(comment.createdAt)}</span>
    </StyledItem>
  );
};

export default CommentItem;

