import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';

import DetailCard from '../../components/DetailCard/DetailCard';
import { RootState } from '../Main/types';
import { getPostSuccess } from '../../store/posts/slicesPost';
import ErrorAlert from '../../components/Error/ErrorAlert';

import './news.css';

const News: FC = () => {
  const idNews = useParams().id;

  const { isLoading, detailCard, isError } = useSelector((state: RootState) => state.post);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPostSuccess(idNews));
  }, []);

  return (
    <>
      {isLoading && (
        <div className="container__skeletons-group">
          <Skeleton variant='rounded' width={300} height={600}/>
      </div>
      )}
      {detailCard && !isError && !isLoading && (
        <div className="container__post">
          <DetailCard {...detailCard} />
        </div>
      )}
      {isError && (
        <div className="container__empty">
          <ErrorAlert text='Ошибка' />
        </div>
      )}
    </>
  )
}

export default News;