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

  const { isLoading, currentUser, usersPosts, error } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser(formattedId));
    dispatch(getUsersPosts(formattedId));
  }, [formattedId]);

  return (
    <>
      {isLoading && (
        <div className="container__loader">
          <CircularProgress color="inherit" />
        </div>
      )}
      {currentUser != null && !isLoading && error === '' && (
        <div className="container__user user">
          <UserCard user={currentUser} />
          <div className="user__posts-group">
            <span className="posts-group__title">Posts</span>
            {isLoading && (
              <div className="container__loader">
                <CircularProgress color="inherit" />
              </div>
            )}
            {usersPosts.length > 0 && !isLoading && error === '' && (
              <PostsList postsArray={usersPosts} userPosts={true} />
            )}
            {usersPosts.length === 0 && !isLoading && error === '' && (
              <div className="posts-group container__empty">
                <WarningAlert text="Постов еще нет" type="info" />
              </div>
            )}
          </div>
        </div>
      )}
      {error !== '' && (
        <div className="container__empty">
          <WarningAlert text={error} type="error" />
        </div>
      )}
    </>
  )
}

export default User;

