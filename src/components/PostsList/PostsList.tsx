import { FC } from 'react';

import PostCard from '../PostCard/PostCard.tsx';

import './PostsList.css'

const PostsList: FC = () => {
  return (
    <div className='main__posts'>
      <PostCard/>
    </div>
  )
}

export default PostsList;