import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Skeleton,
  Stack
} from '@mui/material';

import { getCard } from '../../store/posts';
import { getComments } from '../../store/comments';
import DetailCard from '../../components/DetailCard/DetailCard';
import WarningAlert from '../../components/Error/WarningAlert';
import { StyledBox } from '../../components/DetailCard/styles';
import { CommentsInterface } from '../../store/comments/types';
import CommentItem from '../../components/CommentItem/CommentItem';
import { AppDispatch, RootState } from '../Main/types';

import './news.css';

const News: FC = () => {
  const { id } = useParams();
  const formattedId = Number(id);

  const { isLoading, detailCard, isError } = useSelector((state: RootState) => state.card);
  const { isDownloaded, commentsList, isFailed } = useSelector((state: RootState) => state.comments);

  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(getCard(formattedId));
    dispatch(getComments(formattedId));
  }, [formattedId]);

  return (
    <>
      {isLoading && (
        <div className="container__skeletons-group">
          <Skeleton variant='rounded' width={300} height={600}/>
      </div>
      )}
      {detailCard != null && isError === '' && !isLoading && (
        <div className="container__post post">
          <DetailCard {...detailCard} />
          <div className="post__comments-group">
            <span>Comments</span>
            {isDownloaded && (
              <div className="container__skeletons-group">
                <Skeleton variant='rounded' width="100%" height={40}/>
              </div>
            )}
            {commentsList.length > 0 && isFailed === '' && !isDownloaded && (
              <StyledBox>
                <Stack spacing={2}>
                  {commentsList.map((comment: CommentsInterface) => <CommentItem key={comment.id} {...comment} />)}
                </Stack>
              </StyledBox>
            )}
            {commentsList.length === 0 && isFailed === '' && !isDownloaded && (
              <div className="container__empty">
                <WarningAlert text="Комментариев еще нет" type="info" />
              </div>
            )}
            {isFailed && (
              <div className="container__empty">
                <WarningAlert text={isFailed} type="error" />
              </div>
            )}
          </div>
        </div>
      )}
      {isError !== '' && (
        <div className="container__empty">
          <WarningAlert text="Такой новости нет" type="error" />
        </div>
      )}
    </>
  )
}

export default News;
