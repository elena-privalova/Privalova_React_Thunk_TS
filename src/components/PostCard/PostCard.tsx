import { type FC } from 'react';

import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';

import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';

import { getFormatedDate } from '../../utils/getFormatedDate.ts';
import { NewsInterface } from '../../vite-env';

import { StyledCard, StyledCardHeader, StyledSubheader, StyledTypography } from './style.ts';
import './PostCard.css';
import { getFormatedSubheader } from '../../utils/getFormatedSubheader.ts';

const PostCard: FC<NewsInterface> = (news: NewsInterface) => {
  return (
    <>
      <StyledCard className="card">
        <div className="card__header">
          <CardHeader
            title={news.title}
            titleTypographyProps = {StyledCardHeader.titleTypographyProps}
            subheader={getFormatedSubheader(news.author.firstName, news.author.lastName)}
            subheaderTypographyProps = {StyledSubheader.subheaderTypographyProps}
          />
          <CardHeader
            subheader={getFormatedDate(news.createdAt)}
            subheaderTypographyProps = {StyledCardHeader.styledDateProps}
          />
        </div>
        <div className="card__picture">
          <CardMedia
            component="img"
            height="180px"
            image={news.coverPath ? news.coverPath : './src/images/defaultPicture.jpg'}
            alt="Image"
          />
        </div>
        <CardContent sx={{ height: '350px' }}>
          <StyledTypography variant="body2" color="text.secondary">{news.text}</StyledTypography>
          <div className="card__tags">
            {news.tags.map(tag => <Chip key={tag.id} label={tag.value} />)}
          </div>
          <div className="card__rating-group rating-group">
            <Rating name="Rating" readOnly value={news.rating} />
            <div className="rating-group__comments">
              <ModeCommentOutlined fontSize="medium" color="action" />
              <span>{news.commentsCount}</span>
            </div>
          </div>
        </CardContent>
      </StyledCard>
    </>
  )
}

export default PostCard;