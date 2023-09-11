import { memo, type FC } from 'react';
import classNames from 'classnames';

import PostCard from '../PostCard/PostCard';

import { PostsListProps } from './types';

import './postsList.css';

const PostsList: FC<PostsListProps> = memo(({ postsArray, userPosts }) => {
  const postsListClass = classNames({
    container__posts: true,
    'user-posts': userPosts
  });

  return (
    <div className={postsListClass}>
      {postsArray.map((news) => <PostCard key={news.id} post={news}/>)}
    </div>
  );
});

export default PostsList;

