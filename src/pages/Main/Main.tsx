import { useEffect, type FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';

import { getPostsSuccess } from '../../store/posts/slicesPosts';
import PostsList from '../../components/PostsList/PostsList';
import WarningAlert from '../../components/Error/WarningAlert';
import { getFilterArray } from '../../utils/getFilterArray';

import { RootState } from './types';
import './main.css';

const Main: FC = () => {
  const { 
    isLoading, 
    postsList, 
    isError, 
    searchText, 
    filterType 
  } = useSelector((state: RootState) => state.posts);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPostsSuccess())
  }, []);

  const memoizedFilterArray = useMemo(() =>
    getFilterArray(postsList, searchText, filterType), 
    [postsList, searchText, filterType]
  );
  
  return (
    <>
      {isLoading && (
        <div className="container__skeletons-group">
          <Skeleton variant='rounded' width={300} height={600}/>
          <Skeleton variant='rounded' width={300} height={600}/>
        </div>
      )}
      {postsList.length > 0 && !isError && !isLoading && (
        <PostsList array={memoizedFilterArray} />
      )}
      {postsList.length === 0 && !isError && (
        <div className="container__empty">
          <WarningAlert text="Новостей нет" type="info" />
        </div>
      )}
      {isError && (
        <div className="container__empty">
          <WarningAlert text="Ошибка" type="error" />
        </div>
      )}
    </>
  )
}

export default Main;