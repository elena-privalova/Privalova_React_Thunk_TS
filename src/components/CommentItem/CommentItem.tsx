import { type FC } from 'react';
import { Avatar } from '@mui/material';

import { CommentsList } from '../../store/comments/types';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';

import { StyledItem, StyledItemHeader } from './styles';

const CommentItem: FC<CommentsList>  = (props) => {
  return (
    <StyledItem>
      <StyledItemHeader>
        <Avatar
          alt="Avatar Image"
          src={getFormattedAvatarPath(props.author.avatarPath)}
        />
        <span>{props.author.email}</span>
      </StyledItemHeader>
      <div>
        {props.text}
      </div>
      <span>{getFormattedDate(props.createdAt)}</span>
    </StyledItem>
  );
};

export default CommentItem;

