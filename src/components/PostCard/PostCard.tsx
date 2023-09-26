import {
  BaseSyntheticEvent,
  type FC,
  MouseEvent
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardMedia,
  Chip,
  Rating
} from '@mui/material';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';

import { changeNewsVisibility } from '../../store/modals/slicesNewsModal';
import { getFormattedDate } from '../../utils/getFormattedDate';
import defaultImage from '../../images/defaultPicture.jpeg';
import { RootState } from '../../pages/Main/types';
import editNewsIcon from '../../images/editNewsIcon.svg';

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
  const { authUser } = useSelector((state: RootState) => state.auth);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { isNewsVisible } = useSelector((state: RootState) => state.newsModal);

  const dispatch = useDispatch();

  const location = useLocation().pathname;
  const isUsersPath = location.includes('users');

  const navigate = useNavigate();

  const handleClickCard = () => {
    if (!isUsersPath) navigate(`news/${post.id}`);
  };

  const handleClickAuthor = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    if (!isUsersPath) navigate(`users/${post.authorId}`);
  };

  const handleClickEditNews = () => {
    dispatch(changeNewsVisibility({
      isNewsVisible: !isNewsVisible,
      kind: 'edit',
      newsId: post.id
    }));
  };

  const handleError = (e: BaseSyntheticEvent) => {
    e.target.src = defaultImage;
  };

  return (
    <StyledPostCard className="card" onClick={handleClickCard}>
      <div className="card__header header">
        <div className="header__title-group title-group">
          <StyledCardHeader
            title={post.title}
            titleTypographyProps={StyledCardHeaderBlock.titleTypographyProps}
            subheader={post.author.email}
            subheaderTypographyProps={StyledCardHeaderBlock.subheaderTypographyProps}
            onClick={handleClickAuthor}
          />
          <span className="title-group__date">{getFormattedDate(post.createdAt)}</span>
        </div>
        {isUsersPath && authUser.id === currentUser.id && (
          <div className="header__icon-container icon-container">
            <img
              className="icon-container__edit-icon"
              src={editNewsIcon}
              alt='Edit News Icon'
              onClick={handleClickEditNews}
            />
          </div>
        )}
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
          <Rating
            name="Rating"
            readOnly
            precision={0.5}
            value={post.rating}
          />
          <div className="rating-group__comments">
            <ModeCommentOutlined fontSize="medium" color="action" />
            <span>{post.commentsCount}</span>
          </div>
        </div>
      </StyledCardContent>
    </StyledPostCard>
  );
};

export default PostCard;

