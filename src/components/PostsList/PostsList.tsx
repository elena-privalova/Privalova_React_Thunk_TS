import { type FC } from 'react';

import PostCard from '../PostCard/PostCard';
import { NewsInterface } from '../PostCard/types';

import { PostsListProps } from './types';
import './postsList.css';

const PostsList: FC<PostsListProps> = (props) => {
  return (
    <div className={props.typeClass}>
      {props.array.map((news: NewsInterface) => <PostCard key={news.id} {...news}/>)}
    </div>
  )
}

export default PostsList;

