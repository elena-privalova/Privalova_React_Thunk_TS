import { type FC } from 'react';

import PostCard from '../PostCard/PostCard';

import { NewsArrayInterface } from './types';
import './postsList.css';

const PostsList: FC<NewsArrayInterface> = (props) => {
  return (
    <div className='container__posts'>
      {props.array.map(news => <PostCard key={news.id} {...news}/>)}
    </div>
  )
}

export default PostsList;