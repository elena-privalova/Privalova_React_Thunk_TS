import {
  BaseSyntheticEvent,
  MouseEvent,
  type FC,
  useState,
  SyntheticEvent
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardMedia,
  Chip,
  Rating,
  Typography,
  CardContent,
  Avatar
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getFormattedDate } from '../../utils/getFormattedDate';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';
import defaultImage from '../../images/defaultPicture.jpeg';
import { StyledCardHeader, StyledCardHeaderBlock } from '../PostCard/styles';
import { NewsData } from '../PostCard/types';
import { addRating } from '../../store/posts';
import { AppDispatch, RootState } from '../../pages/Main/types';
import { StyledButton } from '../Header/styles';

import { StyledInfoCard } from './styles';
import './detailCard.css';

const DetailCard: FC<NewsData> = (news) => {
  const { cardRating } = useSelector((state: RootState) => state.card);
  console.log(cardRating);
  const dispatch = useDispatch<AppDispatch>();

  const handleError = (e: BaseSyntheticEvent) => {
    e.target.src = defaultImage;
  };

  const navigate = useNavigate();

  const handleClickAuthor = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    navigate(`../users/${news.authorId}`, { replace: true });
  };

  const [isOpen, setOpen] = useState(false);

  const handleClickRateButton = () => {
    setOpen(!isOpen);
  };

  const [rating, setRating] = useState(0);

  const handleChangeRating = (event: SyntheticEvent) => {
    if (event.target instanceof HTMLInputElement) {
      dispatch(addRating({
        postId: news.id,
        value: Number(event.target.defaultValue)
      }));
      setRating(Number(event.target.defaultValue));
    }
  };

  return (
    <StyledInfoCard className="detail-card">
      <StyledCardHeader
        className="detail-card__header"
        avatar={
          <Avatar
            alt="Author Image"
            src={getFormattedAvatarPath(news.author.avatarPath)}
          />
        }
        title={news.title}
        titleTypographyProps={StyledCardHeaderBlock.titleTypographyProps}
        subheader={news.author.email}
        subheaderTypographyProps={StyledCardHeaderBlock.subheaderTypographyProps}
        onClick={handleClickAuthor}
      />
      <div className="detail-card__picture picture">
        <CardMedia
          className="picture"
          component="img"
          height="380px"
          image={`${import.meta.env.VITE_APP_API_URL}${news.coverPath}`}
          onError={handleError}
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
        <div className="detail-card__rating-group rating-group">
          <Typography>Rating: {cardRating}</Typography>
          <StyledButton
            variant="contained"
            onClick={handleClickRateButton}
          >
          Rate
          </StyledButton>
          {isOpen && (
            <Rating
              name="Rating"
              value={rating}
              onChange={handleChangeRating}
            />
          )}
        </div>
      </CardContent>
      <span className="detail-card__date">{getFormattedDate(news.createdAt)}</span>
    </StyledInfoCard>
  );
};

export default DetailCard;

