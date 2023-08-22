import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';

import Header from '../../components/Header/Header.tsx';
import { getPostsSuccess } from '../../store/posts/slices.ts';
import PostsList from '../../components/PostsList/PostsList.tsx';
import ErrorAlert from '../../components/Error/ErrorAlert.tsx';

import { RootState } from './types';
import './main.css';

const Main: FC = () => {
  const { isLoading, postsList, isError } = useSelector((state: RootState) => state.posts);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPostsSuccess())
  }, []);
  
  return (
    <div className="main">
      <Header />
      {isLoading && (
        <div className="main__skeletons-group">
          <Skeleton variant='rounded' width={300} height={600}/>
          <Skeleton variant='rounded' width={300} height={600}/>
      </div>
      )}
      {postsList.length > 0 && !isError && !isLoading && (
        <PostsList array={postsList} />
      )}
      {postsList.length === 0 && !isError && (
        <div className="main__empty">
          <ErrorAlert text='Новых новостей нет' />
        </div>
      )}
      {isError && (
        <div className="main__empty">
          <ErrorAlert text='Ошибка' />
        </div>
      )}
    </div>
  )
}

export default Main;