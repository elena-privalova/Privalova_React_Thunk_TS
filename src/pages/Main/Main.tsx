import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';

import { getPostsSuccess } from '../../store/posts/slicesPosts.ts';
import PostsList from '../../components/PostsList/PostsList.tsx';
import WarningAlert from '../../components/Error/WarningAlert.tsx';

import { RootState } from './types';
import './main.css';

const Main: FC = () => {
  const { isLoading, postsList, isError } = useSelector((state: RootState) => state.posts);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPostsSuccess())
  }, []);
  
  return (
    <>
      {isLoading && (
        <div className="container__skeletons-group">
          <Skeleton variant='rounded' width={300} height={600}/>
          <Skeleton variant='rounded' width={300} height={600}/>
        </div>
      )}
      {postsList.length > 0 && !isError && !isLoading && (
        <PostsList array={postsList} />
      )}
      {postsList.length === 0 && !isError && (
        <div className="container__empty">
          <WarningAlert text='Новых новостей нет' />
        </div>
      )}
      {isError && (
        <div className="container__empty">
          <WarningAlert text='Ошибка' />
        </div>
      )}
    </>
  )
}

export default Main;