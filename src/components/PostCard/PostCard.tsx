import { FC } from 'react';

import { CardMedia, CardHeader, CardContent, Chip, Rating } from '@mui/material';
import { ModeCommentOutlined } from '@mui/icons-material';

import { NewsInterface } from '../../vite-env';

import { StyledCard, StyledCardHeader, StyledTypography } from './style.ts';

import './PostCard.css';

export const arrayNews: NewsInterface[] = [ 
  {
    title: 'Shrimp and Chorizo Paella',
    author: 'Ivan Privalov',
    data: new Date(),
    img: '',
    text: `This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like`,
    tags: ['#1', '#2', '#3'],
    rating: 4,
    comments: 7
  },
  {
    title: 'Shrimp and Chorizo Paella',
    author: 'Ivan Privalov',
    data: new Date(),
    img: '',
    text: `This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.`,
    tags: ['#1', '#2', '#3'],
    rating: 3,
    comments: 5
  }
]

const PostCard: FC = () => {
  return (
    <>
      {arrayNews.map(news => {
        return <StyledCard className="card">
          <div className="card__header">
            <CardHeader
              title={news.title}
              titleTypographyProps = {StyledCardHeader.titleTypographyProps}
              subheader={news.author}
              subheaderTypographyProps = {StyledCardHeader.subheaderTypographyProps}
            />
            <CardHeader
              subheader={`${news.data.getDate()}.${news.data.getMonth()+1}.${news.data.getFullYear()}`}
              subheaderTypographyProps = {StyledCardHeader.subheaderTypographyProps}
              sx={{
                marginTop: '-35px'
              }}
            />
          </div>
          <div className="card__picture">
            <CardMedia
              component="img"
              height="180px"
              image={news.img}
              alt="Image"
            />
          </div>
          <CardContent sx={{ height: '350px' }}>
            <StyledTypography variant="body2" color="text.secondary">{news.text}</StyledTypography>
            <div className="card__tags">
              {news.tags.map(tag => {
                return <Chip label={tag} />
              })}
            </div>
            <div className="card__rating-group rating-group">
              <Rating name="Rating" readOnly value={news.rating} />
              <div className="rating-group__comments">
                <ModeCommentOutlined fontSize="medium" color="action" />
                <span>{news.comments}</span>
              </div>
            </div>
          </CardContent>
        </StyledCard>
      })}
    </>
  )
}

export default PostCard;