import {
  useEffect,
  type FC,
  useMemo,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';

import { getCard } from '../../store/posts';
import { getComments } from '../../store/comments';
import { changeCommentVisibility } from '../../store/modals/slicesCommentModal';
import { CommentData } from '../../store/comments/types';
import DetailCard from '../../components/DetailCard/DetailCard';
import WarningAlert from '../../components/Error/WarningAlert';
import CommentsList from '../../components/CommentsList/CommentsList';
import PaginationPages from '../../components/PaginationPages/PaginationPages';
import { StyledButton } from '../../components/AuthModal/styles';
import usePagination from '../../hooks/usePagination';
import { AppDispatch, RootState } from '../Main/types';

import './news.css';

const News: FC = () => {
  const { id } = useParams();
  const formattedId = Number(id);

  const { isCardLoading, detailCard, cardError } = useSelector((state: RootState) => state.card);
  const { isCommentsLoading, commentsError } = useSelector((state: RootState) => state.comments);
  const { isCommentVisible } = useSelector((state: RootState) => state.commentModal);
  const { authUser } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCard(formattedId));
    dispatch(getComments(formattedId));
  }, [formattedId]);

  const [sliceComments, setSliceComments] = useState<CommentData[]>([]);

  const pagination = usePagination(setSliceComments);

  const memoizedSliceComments = useMemo(() => sliceComments, [sliceComments]);

  const handleClickAddComment = () => {
    dispatch(changeCommentVisibility({ isCommentVisible: !isCommentVisible }));
  };

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
          <div className="post__comments-group comments-group">
            <div className="comments-group__header">
              <span>Comments</span>
              {authUser != null && (
                <StyledButton
                  variant="contained"
                  onClick={handleClickAddComment}
                >
                +
                </StyledButton>
              )}
            </div>
            {isCommentsLoading && (
              <div className="container__skeletons-group">
                <Skeleton variant='rounded' width="100%" height={40}/>
              </div>
            )}
            {sliceComments.length > 0 && commentsError === '' && !isCommentsLoading && (
              <CommentsList commentsList={memoizedSliceComments} />
            )}
            {sliceComments.length === 0 && commentsError === '' && !isCommentsLoading && (
              <div className="container__empty">
                <WarningAlert text="Комментариев еще нет" type="info" />
              </div>
            )}
          </div>
          <PaginationPages
            changePageNumber={pagination.changePageNumber}
            countPages={pagination.countPages}
            currentPage={pagination.currentPage}
          />
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

