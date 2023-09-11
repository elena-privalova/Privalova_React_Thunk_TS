import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

import './layout.css';

const Layout: FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

