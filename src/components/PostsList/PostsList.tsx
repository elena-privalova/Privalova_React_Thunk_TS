import { type FC } from 'react';

import PostCard from '../PostCard/PostCard.tsx';

import { NewsArrayInterface } from './types';

const PostsList: FC<NewsArrayInterface> = (props) => {
  return (
    props.array.map(news => <PostCard key={news.id} {...news}/>)
  )
}

export default PostsList;