import { type FC } from 'react';

import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';

import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';

import { getFormattedDate } from '../../utils/getFormattedDate.ts';
import { getFormattedSubheader } from '../../utils/getFormattedSubheader.ts';

import { 
  StyledCard, 
  StyledCardContent,
  StyledCardHeader, 
  StyledSubheader, 
  StyledTypography 
} from './style.ts';
import './PostCard.css';

const PostCard: FC<NewsInterface> = (news) => {
  return (
    <>
      <StyledCard className="card">
        <div className="card__header">
          <CardHeader
            title={news.title}
            titleTypographyProps = {StyledCardHeader.titleTypographyProps}
            subheader={getFormattedSubheader(news.author.firstName, news.author.lastName)}
            subheaderTypographyProps = {StyledSubheader.subheaderTypographyProps}
          />
          <CardHeader
            subheader={getFormattedDate(news.createdAt)}
            subheaderTypographyProps = {StyledCardHeader.styledDateProps}
          />
        </div>
        <div className="card__picture">
          <CardMedia
            component="img"
            height="180px"
            image={news.coverPath || './src/images/defaultPicture.jpg'}
            alt="Image"
          />
        </div>
        <StyledCardContent>
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
        </StyledCardContent>
      </StyledCard>
    </>
  )
}

export default PostCard;