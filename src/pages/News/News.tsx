import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Skeleton, Stack } from '@mui/material';

import { getCard } from '../../store/posts';
import { getComments } from '../../store/comments';
import DetailCard from '../../components/DetailCard/DetailCard';
import WarningAlert from '../../components/Error/WarningAlert';
import { StyledBox } from '../../components/DetailCard/styles';
import { CommentsList } from '../../store/comments/types';
import CommentItem from '../../components/CommentItem/CommentItem';
import { AppDispatch, RootState } from '../Main/types';

import './news.css';

const News: FC = () => {
  const { id } = useParams();
  const formattedId = Number(id);

  const { isCardLoading, detailCard, cardError } = useSelector((state: RootState) => state.card);
  const { isCommentsLoading, commentsList, commentsError } = useSelector((state: RootState) => state.comments);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCard(formattedId));
    dispatch(getComments(formattedId));
  }, [formattedId]);

  return (
    <>
      {isCardLoading && (
        <div className="container__skeletons-group">
          <Skeleton variant='rounded' width={300} height={600}/>
        </div>
      )}
      {detailCard != null && cardError === '' && !isCardLoading && (
        <div className="container__post post">
          <DetailCard {...detailCard} />
          <div className="post__comments-group">
            <span>Comments</span>
            {isCommentsLoading && (
              <div className="container__skeletons-group">
                <Skeleton variant='rounded' width="100%" height={40}/>
              </div>
            )}
            {commentsList.length > 0 && commentsError === '' && !isCommentsLoading && (
              <StyledBox>
                <Stack spacing={2}>
                  {commentsList.map((comment: CommentsList) => {
                    return <CommentItem key={comment.id} {...comment} />;
                  })}
                </Stack>
              </StyledBox>
            )}
            {commentsList.length === 0 && commentsError === '' && !isCommentsLoading && (
              <div className="container__empty">
                <WarningAlert text="Комментариев еще нет" type="info" />
              </div>
            )}
            {commentsError !== '' && (
              <div className="container__empty">
                <WarningAlert text={commentsError} type="error" />
              </div>
            )}
          </div>
        </div>
      )}
      {cardError !== '' && (
        <div className="container__empty">
          <WarningAlert text="Такой новости нет" type="error" />
        </div>
      )}
    </>
  );
};

export default News;

