import { type FC } from 'react';

import PostCard from '../PostCard/PostCard.tsx';

import './PostsList.css';
import { NewsArray } from './PostsList.props.ts';

const PostsList: FC<NewsArray> = (props: NewsArray) => {
  return (
    <div className='main__posts'>
      {props.array.map((news, index) => <PostCard key={index} {...news}/>)}
    </div>
  )
}

export default PostsList;