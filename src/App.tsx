import { type FC } from 'react';
import { useRoutes } from 'react-router-dom';

import Main from './pages/Main/Main.tsx';
import News from './pages/News/News.tsx';
import Layout from './components/Layout/Layout.tsx';

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