import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import UserCard from '../../components/UserCard/UserCard';
import WarningAlert from '../../components/Error/WarningAlert';
import PostsList from '../../components/PostsList/PostsList';
import { getUser } from '../../store/user';
import { getUsersPosts } from '../../store/user';
import { AppDispatch, RootState } from '../Main/types';

import './user.css';

const User = () => {
  const { id } = useParams();
  const formattedId = Number(id);

  const { isUserLoading, currentUser, usersPosts, userError } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser(formattedId));
    dispatch(getUsersPosts(formattedId));
  }, [formattedId]);

  return (
    <>
      {isUserLoading && (
        <div className="container__loader">
          <CircularProgress color="inherit" />
        </div>
      )}
      {currentUser != null && !isUserLoading && userError === '' && (
        <div className="container__user user">
          <UserCard user={currentUser} />
          <div className="user__posts-group">
            <span className="posts-group__title">Posts</span>
            {isUserLoading && (
              <div className="container__loader">
                <CircularProgress color="inherit" />
              </div>
            )}
            {usersPosts.length > 0 && !isUserLoading && userError === '' && (
              <PostsList postsArray={usersPosts} userPosts={true} />
            )}
            {usersPosts.length === 0 && !isUserLoading && userError === '' && (
              <div className="posts-group container__empty">
                <WarningAlert text="Постов еще нет" type="info" />
              </div>
            )}
          </div>
        </div>
      )}
      {userError !== '' && (
        <div className="container__empty">
          <WarningAlert text={userError} type="error" />
        </div>
      )}
    </>
  );
};

export default User;

