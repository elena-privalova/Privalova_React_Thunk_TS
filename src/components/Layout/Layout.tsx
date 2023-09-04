import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { RootState } from '../../pages/Main/types';
import Header from '../Header/Header';

import './layout.css'
import { CircularProgress } from '@mui/material';

const Layout: FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout;
