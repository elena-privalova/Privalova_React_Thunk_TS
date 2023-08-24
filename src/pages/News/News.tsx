import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Skeleton,
  Stack
} from '@mui/material';

import DetailCard from '../../components/DetailCard/DetailCard';
import { getCardSuccess } from '../../store/posts/slicesCard';
import WarningAlert from '../../components/Error/WarningAlert';
import { getCommetsSuccess } from '../../store/comments/slicesComments';
import { StyledBox } from '../../components/DetailCard/styles';
import { CommentsInterface } from '../../store/comments/types';
import CommentItem from '../../components/CommentItem/CommentItem';
import { RootState } from '../Main/types';

import './news.css';

const News: FC = () => {
  const { id } = useParams();
  const formattedId = Number(id);

  const { isLoading, detailCard, isError } = useSelector((state: RootState) => state.card);
  const { isDownloaded, commentsList, isFailed } = useSelector((state: RootState) => state.comments);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCardSuccess(formattedId));
    dispatch(getCommetsSuccess(formattedId));
  }, [formattedId]);

  return (
    <>
      {isLoading && (
        <div className="container__skeletons-group">
          <Skeleton variant='rounded' width={300} height={600}/>
      </div>
      )}
      {detailCard && !isError && !isLoading && (
        <div className="container__post post">
          <DetailCard {...detailCard} />
          <div className="post__comments-group">
            <span>Comments</span>
            {isDownloaded && (
              <div className="container__skeletons-group">
                <Skeleton variant='rounded' width="100%" height={40}/>
              </div>
            )}
            {commentsList.length > 0 && !isFailed && !isDownloaded && (
              <StyledBox>
                <Stack spacing={2}>
                  {commentsList.map((comment: CommentsInterface) => <CommentItem key={comment.id} {...comment} />)}
                </Stack>
              </StyledBox>
            )}
            {commentsList.length === 0 && !isError && (
              <div className="container__empty">
                <WarningAlert text="Комментариев еще нет" type="info" />
              </div>
            )}
            {isFailed && (
              <div className="container__empty">
                <WarningAlert text="Ошибка" type="error" />
              </div>
            )}
          </div>
        </div>
      )}
      {detailCard == null && (
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
