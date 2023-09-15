import { useEffect, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Popover } from '@mui/material';

import userIcon from '../../images/userIcon.svg';
import postsIcon from '../../images/userPostsIcon.svg';
import { RootState } from '../../pages/Main/types';
import RefreshUserModal from '../RefreshUserModal/RefreshUserModal';
import { StyledMenuItem } from '../FilterElement/styles';
import { changeRefreshVisibility } from '../../store/modals/slicesRefreshModal';

import './userPopover.css';

const UserPopover: FC<UserPopoverProps> = ({ anchorEl, handleClose }) => {
  const isOpen = Boolean(anchorEl);
  const id = isOpen ? 'simple-popover' : undefined;

  const { authUser } = useSelector((state: RootState) => state.auth);
  const { isRefreshVisible } = useSelector((state: RootState) => state.refreshModal);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClickAccount = () => {
    dispatch(changeRefreshVisibility({ isRefreshVisible: !isRefreshVisible }));
    handleClose();
  };

  const handleClickNews = () => {
    navigate(`users/${authUser.id}`);
    handleClose();
  };

  const location = useLocation();

  return (
    <>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        className="user-popover"
      >
        <StyledMenuItem onClick={handleClickAccount}>
          <img src={userIcon} alt="User Icon" />
          <span>About me</span>
        </StyledMenuItem>
        {!location.pathname.includes('users') && (
          <StyledMenuItem onClick={handleClickNews}>
            <img src={postsIcon} alt="Posts Icon" />
            <span>My news</span>
          </StyledMenuItem>
        )}
      </Popover>
      <RefreshUserModal />
    </>
  );
};

export default UserPopover;

