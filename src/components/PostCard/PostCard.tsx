import { BaseSyntheticEvent, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardMedia,
  Chip,
  Rating
} from '@mui/material';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';

import { getFormattedDate } from '../../utils/getFormattedDate';
import defaultImage from '../../images/defaultPicture.jpg';

import { NewsInterface } from './types';
import { 
  StyledPostCard, 
  StyledCardContent,
  StyledCardHeader,
  StyledCardHeaderBlock,
  StyledTypography 
} from './styles';
import './postCard.css';

const PostCard: FC<NewsInterface> = (news) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`news/${news.id}`);
  }

  const handleError = (e: BaseSyntheticEvent) => {
    e.target.src = defaultImage;
  }

  return (
    <StyledPostCard className="card" onClick={handleClick}>
      <div className="card__header header">
        <StyledCardHeader
          title={news.title}
          titleTypographyProps={StyledCardHeaderBlock.titleTypographyProps}
          subheader={news.author.email}
          subheaderTypographyProps={StyledCardHeaderBlock.subheaderTypographyProps}
        />
        <span className="header__date">{getFormattedDate(news.createdAt)}</span>
      </div>
      <div className="card__picture">
        <CardMedia
          component="img"
          height="180px"
          image={`${import.meta.env.VITE_APP_API_URL}${news.coverPath}`}
          onError={handleError}
          alt="News image"
        />
      </div>
      <StyledCardContent>
        <StyledTypography variant="body2" color="text.secondary">{news.text}</StyledTypography>
        <div className="card__tags">
          {news.tags.map((tag) => <Chip key={tag.id} label={tag.value} />)}
        </div>
        <div className="card__rating-group rating-group">
          <Rating name="Rating" readOnly value={news.rating} />
          <div className="rating-group__comments">
            <ModeCommentOutlined fontSize="medium" color="action" />
            <span>{news.commentsCount}</span>
          </div>
        </div>
      </StyledCardContent>
    </StyledPostCard>
  )
}

export default PostCard;