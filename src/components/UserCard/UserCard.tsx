import { type FC } from 'react';
import {
  Avatar,
  CardContent,
  Rating
} from '@mui/material';

import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';
import { getFormattedFullName } from '../../utils/getFormattedFullName';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { StyledInfoCard } from '../DetailCard/styles';
import { StyledCardHeader, StyledCardHeaderBlock } from '../PostCard/styles';

import { UserCardProps } from './types';
import './userCard.css';

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <StyledInfoCard className="user-card">
      <StyledCardHeader
        avatar={
          <Avatar
            alt="User Avatar"
            src={getFormattedAvatarPath(user.avatarPath)}
          />
        }
        title={user.email}
        titleTypographyProps={StyledCardHeaderBlock.titleTypographyProps}
        subheader={getFormattedFullName(user.firstName, user.lastName)}
        subheaderTypographyProps={StyledCardHeaderBlock.subheaderTypographyProps}
      />
      <CardContent>
        <Rating name="Rating" readOnly value={user.rating} />
      </CardContent>
      <span className="user-card__date">{getFormattedDate(user.createdAt)}</span>
    </StyledInfoCard>
  )
}

export default UserCard;

