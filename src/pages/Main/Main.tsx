import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';

import Header from '../../components/Header/Header.tsx';
import { getPostsSuccess } from '../../store/posts/slices.ts';
import PostsList from '../../components/PostsList/PostsList.tsx';

import { RootState } from './types';
import './main.css';

const Main: FC = () => {
  const currentState = useSelector((state: RootState) => state.posts);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPostsSuccess())
  }, []);
  
  return (
    <div className="main">
      <Header />
      
      {currentState.isLoading && (
        <div className="main__skeletons-group">
          <Skeleton variant='rounded' width={300} height={600}/>
          <Skeleton variant='rounded' width={300} height={600}/>
      </div>
      )}

      {currentState.postsList.length > 0 && (
        <PostsList array={currentState.postsList} />
      )}

      {currentState.isError && (
        <div className="main__empty">Новых новостей нет</div>
      )}
    </div>
  )
}

export default Main;