import { type FC } from 'react';

import PostCard from '../PostCard/PostCard.tsx';

import './PostsList.css';
import { NewsArray } from './PostsList.props.ts';

const PostsList: FC<NewsArray> = (props) => {
  return (
    <div className='main__posts'>
      {props.array.map(news => <PostCard key={news.id} {...news}/>)}
    </div>
  )
}

export default PostsList;