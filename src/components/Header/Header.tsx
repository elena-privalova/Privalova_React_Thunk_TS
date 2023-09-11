import { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppBar, Avatar } from '@mui/material';

import newsIcon from '../../images/newsIcon.svg';
import { AppDispatch, RootState } from '../../pages/Main/types';
import { logoutUser } from '../../store/auth/slicesAuth';
import { changeOpeness } from '../../store/modals/slicesAuthModals';
import { changeVisibility } from '../../store/modals/slicesNewsModal';
import { getVerifyUser } from '../../store/auth/thunks';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';
import AuthModal from '../AuthModal/AuthModal';
import SearchElement from '../SearchElement/SearchElement';
import FilterElement from '../FilterElement/FilterElement';
import NewsModal from '../NewsModal/NewsModal';

import {
  StyledAddButton,
  StyledBox,
  StyledButton,
  StyledToolbar,
  StyledTypography
} from './styles';
import './header.css';

const Header: FC = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const { isOpen } = useSelector((state: RootState) => state.authModals);
  const { isVisible } = useSelector((state: RootState) => state.newsModal);

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const handleClickRegistration = () => {
    dispatch(changeOpeness({
      isOvertly: !isOpen,
      kind: 'signup'
    }));
  };

  const handleClickAuthorization = () => {
    dispatch(changeOpeness({
      isOvertly: !isOpen,
      kind: 'login'
    }));
  };

  const handleClickAddNews = () => {
    dispatch(changeVisibility({ isOvertly: !isVisible }));
  };

  const handleClickLogout = () => {
    dispatch(logoutUser());
  };

  const handleClickAvatar = () => {
    navigate(`users/${authUser.id}`);
  };

  useEffect(() => {
    dispatch(getVerifyUser());
  }, []);

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
              {authUser != null ?
                <>
                  <StyledAddButton variant="contained" onClick={handleClickAddNews}>+</StyledAddButton>
                  <div className="buttons-group user-group">
                    <Avatar
                      className="buttons-group__avatar"
                      src={getFormattedAvatarPath(authUser.avatarPath)}
                      alt="User avatar"
                      onClick={handleClickAvatar}
                    />
                    <StyledButton variant="contained" onClick={handleClickLogout}>Logout</StyledButton>
                  </div>
                </>
                :
                <>
                  <StyledButton
                    variant="contained"
                    onClick={handleClickRegistration}
                  >
                    sign up
                  </StyledButton>
                  <StyledButton
                    variant="contained"
                    onClick={handleClickAuthorization}
                  >
                    log in
                  </StyledButton>
                </>
              }
            </div>
          </StyledToolbar>
        </AppBar>
      </StyledBox>
      <AuthModal />
      <NewsModal />
    </>
  );
};

export default Header;

