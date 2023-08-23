import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

import DetailCard from '../../components/DetailCard/DetailCard';
import { getPostSuccess } from '../../store/posts/slicesCard';
import WarningAlert from '../../components/Error/WarningAlert';
import { RootState } from '../Main/types';

import './news.css';

const News: FC = () => {
  const { id } = useParams();

  const { isLoading, detailCard, isError } = useSelector((state: RootState) => state.post);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPostSuccess(id));
  }, [id]);

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
          <WarningAlert text='Ошибка' />
        </div>
      )}
    </>
  )
}

export default News;