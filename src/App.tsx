import { type FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from './pages/Main/Main';
import News from './pages/News/News';
import User from './pages/User/User';
import Layout from './components/Layout/Layout';
import { RootState } from './pages/Main/types';

const App: FC = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);

  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Main />
        },
        {
          path: 'news/:id',
          element: <News />
        },
        {
          path: 'users/:id',
          element: authUser && <User /> || <Navigate to="/" />
        }
      ]
    }
  ]);
};

export default App;

