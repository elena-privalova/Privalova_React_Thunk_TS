import { type FC } from 'react';
import AppBar from '@mui/material/AppBar';

import { 
  StyledBox, 
  StyledButton, 
  StyledToolbar, 
  StyledTypography 
} from './style.ts';
import './Header.css';

const Header: FC = () => {
  return (
    <StyledBox>
      <AppBar>
        <StyledToolbar>
          <div className="logo-group">
            <StyledTypography>News</StyledTypography>
            <img className='logo-group__logo' src='./src/images/newsIcon.svg' />
          </div>
          <div className="buttons-group">
            <StyledButton variant="contained">Sign in</StyledButton>
            <StyledButton variant="contained">Sign up</StyledButton>
          </div>
        </StyledToolbar>
      </AppBar>
    </StyledBox>
  )
}

export default Header;