import {
  type FC,
  useEffect,
  useState,
  MouseEvent
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar } from '@mui/material';
import { useLocation } from 'react-router-dom';

import newsIcon from '../../images/newsIcon.svg';
import { AppDispatch, RootState } from '../../pages/Main/types';
import { logoutUser } from '../../store/auth/slicesAuth';
import { changeAuthVisibility } from '../../store/modals/slicesAuthModals';
import { changeNewsVisibility } from '../../store/modals/slicesNewsModal';
import { getVerifyUser } from '../../store/auth/thunks';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';
import AuthModal from '../AuthModal/AuthModal';
import SearchElement from '../SearchElement/SearchElement';
import FilterElement from '../FilterElement/FilterElement';
import NewsModal from '../NewsModal/NewsModal';
import UserPopover from '../UserPopover/UserPopover';

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
  const { isAuthVisible } = useSelector((state: RootState) => state.authModals);
  const { isNewsVisible } = useSelector((state: RootState) => state.newsModal);

  const dispatch = useDispatch<AppDispatch>();

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRegistration = () => {
    dispatch(changeAuthVisibility({
      isAuthVisible: !isAuthVisible,
      currentType: 'signup'
    }));
  };

  const handleClickAuthorization = () => {
    dispatch(changeAuthVisibility({
      isAuthVisible: !isAuthVisible,
      currentType: 'login'
    }));
  };

  const handleClickAddNews = () => {
    dispatch(changeNewsVisibility({ isNewsVisible: !isNewsVisible }));
  };

  const handleClickLogout = () => {
    dispatch(logoutUser());
  };

  const handleClickAvatar = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    dispatch(getVerifyUser());
  }, []);

  const location = useLocation();

  return (
    <>
      <StyledBox>
        <AppBar>
          <StyledToolbar>
            <div className='logo-group'>
              <StyledTypography>News</StyledTypography>
              <img className='logo-group__logo' src={newsIcon} />
            </div>
            {!location.pathname.includes('news') && (
              <div className="search-group">
                <SearchElement />
                <FilterElement />
              </div>
            )}
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
      {authUser != null && (
        <>
          <AuthModal />
          <NewsModal />
          <UserPopover anchorEl={anchorEl} handleClose={handleClose} />
        </>
      )}
    </>
  );
};

export default Header;

