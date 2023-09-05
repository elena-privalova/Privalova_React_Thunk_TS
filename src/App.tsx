import { type FC } from 'react';
import { useRoutes } from 'react-router-dom';

import Main from './pages/Main/Main';
import News from './pages/News/News';
import Layout from './components/Layout/Layout';

const App: FC = () => {
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
        }
      ]
    }
  ])
}

export default App;

