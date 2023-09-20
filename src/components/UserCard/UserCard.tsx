import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  CardContent,
  Rating
} from '@mui/material';

import { changeNewsVisibility } from '../../store/modals/slicesNewsModal';
import { changeRefreshVisibility } from '../../store/modals/slicesRefreshModal';
import { getUsersPosts } from '../../store/user';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';
import { getFormattedFullName } from '../../utils/getFormattedFullName';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { AppDispatch, RootState } from '../../pages/Main/types';
import userIcon from '../../images/userIcon.svg';
import postsIcon from '../../images/userPostsIcon.svg';
import { StyledInfoCard } from '../DetailCard/styles';
import { StyledCardHeader, StyledCardHeaderBlock } from '../PostCard/styles';

import { UserCardProps } from './types';

import './userCard.css';

const UserCard: FC<UserCardProps> = ({ user }) => {
  const { isRefreshVisible } = useSelector((state: RootState) => state.refreshModal);
  const { isNewsVisible } = useSelector((state: RootState) => state.newsModal);
  const { authUser } = useSelector((state: RootState) => state.auth);
  const { currentUser, isSuccessUserNews } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  const handleClickAccount = () => {
    dispatch(changeRefreshVisibility({ isRefreshVisible: !isRefreshVisible }));
  };

  const handleClickAddNews = () => {
    dispatch(changeNewsVisibility({
      isNewsVisible: !isNewsVisible,
      kind: 'add'
    }));
  };

  useEffect(() => {
    if (isSuccessUserNews) dispatch(getUsersPosts(user.id));
  }, [isSuccessUserNews]);

  return (
    <StyledInfoCard className="user-card">
      <div className="user-card header">
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
        {currentUser.id === authUser.id && (
          <div className="header__buttons-group">
            <img
              onClick={handleClickAccount}
              src={userIcon}
              alt="User Icon"
            />
            <img
              onClick={handleClickAddNews}
              src={postsIcon}
              alt="Posts Icon"
            />
          </div>
        )}
      </div>
      <CardContent>
        <Rating name="Rating" readOnly value={user.rating} />
      </CardContent>
      <span className="user-card__date">{getFormattedDate(user.createdAt)}</span>
    </StyledInfoCard>
  );
};

export default UserCard;

