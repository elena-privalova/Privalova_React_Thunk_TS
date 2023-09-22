import { Stack } from '@mui/material';
import { memo, type FC } from 'react';

import { StyledBox } from '../DetailCard/styles';
import CommentItem from '../CommentItem/CommentItem';

import { CommentsListProps } from './types';

const CommentsList: FC<CommentsListProps> = memo(({ commentsList }) => {
  return (
    <StyledBox>
      <Stack spacing={2}>
        {commentsList.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
      </Stack>
    </StyledBox>
  );
});

export default CommentsList;

