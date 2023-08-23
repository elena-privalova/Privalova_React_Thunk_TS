import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

import DetailCard from '../../components/DetailCard/DetailCard';
import { getCardSuccess } from '../../store/posts/slicesCard';
import WarningAlert from '../../components/Error/WarningAlert';
import { RootState } from '../Main/types';

import './news.css';

const News: FC = () => {
  const { id } = useParams();
  const formattedId = Number(id);

  const { isLoading, detailCard, isError } = useSelector((state: RootState) => state.card);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCardSuccess(formattedId));
  }, [formattedId]);

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
      {detailCard === null && (
        <div className="container__empty">
          <WarningAlert text="Такой новости не существует" type="error" />
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

export default News;