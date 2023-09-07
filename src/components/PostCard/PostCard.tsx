import {
  BaseSyntheticEvent,
  type FC,
  MouseEvent
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardMedia,
  Chip,
  Rating
} from '@mui/material';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';

import { getFormattedDate } from '../../utils/getFormattedDate';
import defaultImage from '../../images/defaultPicture.jpg';

import { PostCardProps } from './types';
import { 
  StyledPostCard, 
  StyledCardContent,
  StyledCardHeader,
  StyledCardHeaderBlock,
  StyledTypography 
} from './styles';
import './postCard.css';

const PostCard: FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`news/${post.id}`);
  };

  const handleClickAuthor = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    navigate(`users/${post.authorId}`);
  };

  const handleError = (e: BaseSyntheticEvent) => {
    e.target.src = defaultImage;
  };
  
  return (
    <StyledPostCard className="card" onClick={handleClickCard}>
      <div className="card__header header">
        <StyledCardHeader
          title={post.title}
          titleTypographyProps={StyledCardHeaderBlock.titleTypographyProps}
          subheader={post.author.email}
          subheaderTypographyProps={StyledCardHeaderBlock.subheaderTypographyProps}
          onClick={handleClickAuthor}
        />
        <span className="header__date">{getFormattedDate(post.createdAt)}</span>
      </div>
      <div className="card__picture">
        <CardMedia
          component="img"
          height="180px"
          image={`${import.meta.env.VITE_APP_API_URL}${post.coverPath}`}
          onError={handleError}
          alt="News image"
        />
      </div>
      <StyledCardContent>
        <StyledTypography variant="body2" color="text.secondary">{post.text}</StyledTypography>
        <div className="card__tags">
          {post.tags.map((post) => <Chip key={post.id} label={post.value} />)}
        </div>
        <div className="card__rating-group rating-group">
          <Rating name="Rating" readOnly value={post.rating} />
          <div className="rating-group__comments">
            <ModeCommentOutlined fontSize="medium" color="action" />
            <span>{post.commentsCount}</span>
          </div>
        </div>
      </StyledCardContent>
    </StyledPostCard>
  )
}

export default PostCard;

