import { type FC } from 'react';
import PostCard from '../PostCard/PostCard.tsx';

import { NewsArrayInterface } from './types/index';

import './postsList.css';

const PostsList: FC<NewsArrayInterface> = (props) => {
  return (
    <div className='main__posts'>
      {props.array.map(news => <PostCard key={news.id} {...news}/>)}
    </div>
  )
}

export default PostsList;