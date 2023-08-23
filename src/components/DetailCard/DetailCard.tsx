import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  CardMedia,
  Chip,
  Rating,
  Typography,
  CardContent,
  Avatar,
  Stack,
  Skeleton
} from '@mui/material';

import { RootState } from '../../pages/Main/types';
import { getCommetsSuccess } from '../../store/comments/slicesComments';
import { CommentsInterface } from '../../store/comments/types';
import { getFormattedDate } from '../../utils/getFormattedDate';
import defaultImage from '../../images/defaultPicture.jpg';
import { StyledCardHeader, StyledCardHeaderBlock } from '../PostCard/styles';
import { NewsInterface } from '../PostCard/types';
import CommentItem from '../CommentItem/CommentItem';
import WarningAlert from '../Error/WarningAlert';

import { StyledBox, StyledDetailCard } from './styles';
import './detailCard.css';


const DetailCard: FC<NewsInterface> = (news) => {
  const { isLoading, commentsList, isError } = useSelector((state: RootState) => state.comments);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCommetsSuccess());
  }, []);

  return (
    <StyledDetailCard className="detail-card">
      <StyledCardHeader
        avatar={
          <Avatar>{news.author.avatarPath}</Avatar>
        }
        title={news.title}
        titleTypographyProps={StyledCardHeaderBlock.titleTypographyProps}
        subheader={news.author.email}
        subheaderTypographyProps={StyledCardHeaderBlock.subheaderTypographyProps}
      />
      <div className="detail-card__picture picture">
        <CardMedia 
          className="picture"
          component="img"
          height="380px"
          image={news.coverPath ?? defaultImage}
          alt="News image"
        />
      </div>
      <CardContent>
        <Typography 
          className="detail-card__text" 
          variant="body2" 
          color="text.secondary"
        >
          {news.text}
        </Typography>
        <div className="detail-card__tags">
          {news.tags.map((tag) => <Chip key={tag.id} label={tag.value} />)}
        </div>
        <div className="detail-card__comments-group">
          <span>Comments</span>
          {isLoading && (
            <div className="container__skeletons-group">
              <Skeleton variant='rounded' width="100%" height={40}/>
            </div>
          )}
          {commentsList.length > 0 && !isError && !isLoading && (
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
          {isError && (
            <div className="container__empty">
              <WarningAlert text="Ошибка" type="error" />
            </div>
          )}
        </div>
        <Rating name="Rating" readOnly value={news.rating} />
      </CardContent>
      <span className="detail-card__date">{getFormattedDate(news.createdAt)}</span>
    </StyledDetailCard>
  )
}

export default DetailCard;
