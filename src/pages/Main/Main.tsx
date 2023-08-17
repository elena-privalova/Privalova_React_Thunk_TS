import { FC } from 'react';

import Header from '../../components/Header/Header.tsx';
import PostsList from '../../components/PostsList/PostsList.tsx';

import './Main.css';

const Main: FC = () => {
  return (
    <div className="main">
      <Header />
      <PostsList />
    </div>
  )
}

export default Main;