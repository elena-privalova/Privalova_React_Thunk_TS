import { type FC } from 'react';

import Header from '../../components/Header/Header.tsx';
import PostsList from '../../components/PostsList/PostsList.tsx';
import { NewsInterface } from '../../vite-env';

import './Main.css';

export const arrayNews: NewsInterface[] = [ 
  {
    title: 'Shrimp and Chorizo Paella',
    author: 'Ivan Privalov',
    data: new Date(),
    img: '',
    text: `This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like`,
    tags: ['#1', '#2', '#3'],
    rating: 4,
    comments: 7
  },
  {
    title: 'Shrimp and Chorizo Paella',
    author: 'Ivan Privalov',
    data: new Date(),
    img: '',
    text: `This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.`,
    tags: ['#1', '#2', '#3'],
    rating: 3,
    comments: 5
  }
];

const Main: FC = () => {
  return (
    <div className="main">
      <Header />
      <PostsList array={arrayNews}/>
    </div>
  )
}

export default Main;