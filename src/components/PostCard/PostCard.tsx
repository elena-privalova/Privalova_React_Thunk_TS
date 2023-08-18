import { type FC } from 'react';

import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';

import { getFormattedDate } from '../../utils/getFormattedDate.ts';

import { 
  StyledCard, 
  StyledCardContent,
  StyledCardHeader,
  StyledCardHeaderBlock,
  StyledTypography 
} from './style.ts';
import './postCard.css';

const PostCard: FC<NewsInterface> = (news) => {
  return (
    <StyledCard className="card">
      <div className="card__header header">
        <StyledCardHeader
          title={news.title}
          titleTypographyProps = {StyledCardHeaderBlock.titleTypographyProps}
          subheader={news.author.email}
          subheaderTypographyProps = {StyledCardHeaderBlock.subheaderTypographyProps}
        />
        <span className="header__date">{getFormattedDate(news.createdAt)}</span>
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
  )
}

export default PostCard;