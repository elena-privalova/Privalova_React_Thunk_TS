import { type FC } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';

import { getFormattedDate } from '../../utils/getFormattedDate.ts';
import { StyledCardHeader, StyledCardHeaderBlock } from '../PostCard/styles.ts';
import { NewsInterface } from '../PostCard/types';
import defaulPicture from '../../images/defaultPicture.jpg';

import { StyledDetailCard } from './styles.ts';
import './detailCard.css';

const DetailCard: FC<NewsInterface> = (news) => {
  return (
    <StyledDetailCard className="detail-card">
      <div className="detail-card__header header">
        <StyledCardHeader
          avatar={
            <Avatar>{news.author.avatarPath}</Avatar>
          }
          title={news.title}
          titleTypographyProps = {StyledCardHeaderBlock.titleTypographyProps}
          subheader={news.author.email}
          subheaderTypographyProps = {StyledCardHeaderBlock.subheaderTypographyProps}
        />
      </div>
      <div className="detail-card__picture picture">
        <CardMedia className="picture"
        component="img"
        height="380px"
        image={defaulPicture ?? news.coverPath}
        alt="News image"
        />
      </div>
      <CardContent>
        <Typography className="detail-card__text" variant="body2" color="text.secondary">{news.text}</Typography>
        <div className="detail-card__tags">
          {news.tags.map(tag => <Chip key={tag.id} label={tag.value} />)}
        </div>
        <Rating name="Rating" readOnly value={news.rating} />
      </CardContent>
      <span className="detail-card__date">{getFormattedDate(news.createdAt)}</span>
    </StyledDetailCard>
  )
}

export default DetailCard;