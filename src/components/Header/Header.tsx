import { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar } from '@mui/material';

import newsIcon from '../../images/newsIcon.svg';
import { AppDispatch, RootState } from '../../pages/Main/types';
import {
  changeVisibilityAuthorization,
  changeVisibilityRegistration
} from '../../store/modals/slicesModals';
import { logoutUser } from '../../store/auth/slicesAuth';
import { getVerifyUser } from '../../store/auth/thunks';
import ModalWindow from '../ModalWindow/ModalWindow';
import SearchElement from '../SearchElement/SearchElement';
import FilterElement from '../FilterElement/FilterElement';

import { 
  StyledBox, 
  StyledButton, 
  StyledToolbar, 
  StyledTypography 
} from './styles';
import './header.css';

const Header: FC = () => {
  const { openRegistration, openAuthorization } = useSelector((state: RootState) => state.modals);
  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const handleClickRegistration = () => {
    dispatch(changeVisibilityRegistration(!openRegistration));
  }

  const handleClickAuthorization = () => {
    dispatch(changeVisibilityAuthorization(!openAuthorization));
  }

  const handleClickLogout = () => {
    dispatch(logoutUser());
  }

  useEffect(() => {
    dispatch(getVerifyUser());
  }, [])

  return (
    <>
      <StyledBox>
        <AppBar>
          <StyledToolbar>
            <div className='logo-group'>
              <StyledTypography>News</StyledTypography>
              <img className='logo-group__logo' src={newsIcon} />
            </div>
            <div className="search-group">
              <SearchElement />
              <FilterElement />
            </div>
            <div className="buttons-group">
              {user == null && (
                <>
                  <StyledButton variant="contained" onClick={handleClickRegistration}>
                    Sign up
                  </StyledButton>
                  <StyledButton variant="contained" onClick={handleClickAuthorization}>
                    Log in
                  </StyledButton>
                </>
              )}
              {user != null && (
                <>
                  <Avatar
                    src={
                      user.avatarPath ?
                      `${import.meta.env.VITE_APP_API_URL}${user.avatarPath}` : 
                      ''
                    }
                    alt="User avatar"
                  />
                  <StyledButton variant="contained" onClick={handleClickLogout}>Logout</StyledButton>
                </>
              )}
            </div>
          </StyledToolbar>
        </AppBar>
      </StyledBox>
      <ModalWindow />
    </>
  )
}

export default Header;
