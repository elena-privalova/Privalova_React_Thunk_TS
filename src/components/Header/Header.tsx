import { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar } from '@mui/material';

import newsIcon from '../../images/newsIcon.svg';
import { AppDispatch, RootState } from '../../pages/Main/types';
import { logoutUser } from '../../store/auth/slicesAuth';
import { changeVisibility } from '../../store/modals/slicesModals';
import { getVerifyUser } from '../../store/auth/thunks';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';
import ModalWindow from '../AuthModal/AuthModal';
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
  const { user } = useSelector((state: RootState) => state.auth);
  const { isOpen } = useSelector((state: RootState) => state.modals);

  const dispatch = useDispatch<AppDispatch>();

  const handleClickRegistration = () => {
    dispatch(changeVisibility({
      isOvertly: !isOpen,
      kind: 'sign up',
    }));
  };

  const handleClickAuthorization = () => {
    dispatch(changeVisibility({
      isOvertly: !isOpen,
      kind: 'log in',
    }));
  };

  const handleClickLogout = () => {
    dispatch(logoutUser());
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
              {user != null ?
                <>
                  <Avatar
                    src={getFormattedAvatarPath(user.avatarPath)}
                    alt="User avatar"
                  />
                  <StyledButton variant="contained" onClick={handleClickLogout}>Logout</StyledButton>
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
      <ModalWindow />
    </>
  )
}

export default Header;
