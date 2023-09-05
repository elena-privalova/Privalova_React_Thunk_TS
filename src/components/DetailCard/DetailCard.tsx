import { BaseSyntheticEvent, type FC } from 'react';
import { 
  CardMedia,
  Chip,
  Rating,
  Typography,
  CardContent,
  Avatar,
} from '@mui/material';

import { getFormattedDate } from '../../utils/getFormattedDate';
import defaultImage from '../../images/defaultPicture.jpg';
import { StyledCardHeader, StyledCardHeaderBlock } from '../PostCard/styles';
import { NewsInterface } from '../PostCard/types';

import { StyledDetailCard } from './styles';
import './detailCard.css';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';

const DetailCard: FC<NewsInterface> = (news) => {
  const handleError = (e: BaseSyntheticEvent) => {
    e.target.src = defaultImage;
  };

  return (
    <StyledDetailCard className="detail-card">
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
    </StyledDetailCard>
  )
}

export default DetailCard;

