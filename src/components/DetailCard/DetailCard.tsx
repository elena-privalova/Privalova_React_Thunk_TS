import { BaseSyntheticEvent, type FC } from 'react';
import {
  CardMedia,
  Chip,
  Rating,
  Typography,
  CardContent,
  Avatar
} from '@mui/material';

import { getFormattedDate } from '../../utils/getFormattedDate';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';
import defaultImage from '../../images/defaultPicture.jpeg';
import { StyledCardHeader, StyledCardHeaderBlock } from '../PostCard/styles';
import { NewsData } from '../PostCard/types';

import { StyledInfoCard } from './styles';
import './detailCard.css';

const DetailCard: FC<NewsData> = (news) => {
  const handleError = (e: BaseSyntheticEvent) => {
    e.target.src = defaultImage;
  };

  return (
    <StyledInfoCard className="detail-card">
      <StyledCardHeader
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
        <Rating name="Rating" readOnly value={news.rating} />
      </CardContent>
      <span className="detail-card__date">{getFormattedDate(news.createdAt)}</span>
    </StyledInfoCard>
  );
};

export default DetailCard;

