import { useEffect, type FC } from 'react';

import Header from '../../components/Header/Header.tsx';

import './main.css';
import store from '../../store/index.ts';
import { getPostsSuccess } from '../../store/posts/slices.ts';
import PostsList from '../../components/PostsList/PostsList.tsx';
import { Skeleton } from '@mui/material';

const Main: FC = () => {
  useEffect(() => {
    store.dispatch(getPostsSuccess())
  }, [])
  const getCurrentState = () => {
    return store.getState().posts
  }
  let a;
  store.subscribe(() => a = getCurrentState())
  console.log(a)
  return (
    <div className="main">
      <Header />
      {/* {state.isLoading
        ? <Skeleton variant='rounded' width={300} height={600}/>
        : state.postsList ? 
        <PostsList array={state.postsList} />
        : <div className="main__empty">Новых новостей нет</div>
      } */}
    </div>
  )
}

export default Main;