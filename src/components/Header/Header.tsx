import {
  type FC,
  useEffect
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import newsIcon from '../../images/newsIcon.svg';
import { AppDispatch, RootState } from '../../pages/Main/types';
import { logoutUser } from '../../store/auth/slicesAuth';
import { changeAuthVisibility } from '../../store/modals/slicesAuthModals';
import { getVerifyUser } from '../../store/auth/thunks';
import { CURRENT_AUTH_TYPE_VALUES } from '../../store/modals/types';
import { getToken } from '../../lib/local-storage';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';
import AuthModal from '../AuthModal/AuthModal';
import SearchElement from '../SearchElement/SearchElement';
import FilterElement from '../FilterElement/FilterElement';
import RefreshUserModal from '../RefreshUserModal/RefreshUserModal';
import NewsModal from '../NewsModal/NewsModal';

import {
  StyledBox,
  StyledButton,
  StyledToolbar,
  StyledTypography
} from './styles';

import './header.css';

const Header: FC = () => {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { isAuthVisible } = useSelector((state: RootState) => state.authModals);

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const handleClickAuthModal = (type: keyof typeof CURRENT_AUTH_TYPE_VALUES) => {
    dispatch(changeAuthVisibility({
      isAuthVisible: !isAuthVisible,
      currentType: type
    }));
  };

  const handleClickLogout = () => {
    dispatch(logoutUser());
  };

  const handleClickAvatar = () => {
    navigate(`users/${authUser.id}`);
  };

  useEffect(() => {
    if (getToken() != null) dispatch(getVerifyUser());
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
                  <div className="buttons-group">
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
                    onClick={() => handleClickAuthModal('signup')}
                  >
                    sign up
                  </StyledButton>
                  <StyledButton
                    variant="contained"
                    onClick={() => handleClickAuthModal('login')}
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
      {authUser != null && currentUser != null && (
        <>
          <NewsModal />
          <RefreshUserModal />
        </>
      )}
    </>
  );
};

export default Header;

