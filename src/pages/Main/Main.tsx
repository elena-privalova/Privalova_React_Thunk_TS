import { type FC } from 'react';

import Header from '../../components/Header/Header.tsx';
import PostsList from '../../components/PostsList/PostsList.tsx';
import { NewsInterface } from '../../components/PostCard/types/index';

import './main.modules.css';

export const arrayNews: NewsInterface[] = [ 
  {
    id: 1,
    title: 'Shrimp and Chorizo Paella',
    text: `This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like`,
    coverPath: '',
    author: {
      id: 1,
      email: 'privalov_ivan@mail.ru'
    },
    tags: [
      {
        id: 1,
        value: '#1',
      },
      {
        id: 2,
        value: '#2',
      },
      {
        id: 3,
        value: '#3',
      },
    ],
    rating: 4,
    commentsCount: 7,
    createdAt: new Date()
  },
  {
    id: 2,
    title: 'Shrimp and Chorizo Paella',
    text: `This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.`,
    coverPath: '',
    author: {
      id: 2,
      email: 'privalov_ivan@mail.ru'
    },
    tags: [
      {
        id: 1,
        value: '#1',
      },
      {
        id: 2,
        value: '#2',
      },
      {
        id: 3,
        value: '#3',
      },
    ],
    rating: 5,
    commentsCount: 15,
    createdAt: new Date()
  }
];

const Main: FC = () => {
  return (
    <div className="main">
      <Header />
      {arrayNews.length 
        ? <PostsList array={arrayNews}/> 
        : <div className="main__empty">Новых новостей нет</div>
      }
    </div>
  )
}

export default Main;