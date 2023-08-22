import { type FC } from 'react';

import { 
  StyledAppBar,
  StyledButton, 
  StyledToolbar, 
  StyledTypography 
} from './styles.ts';
import './header.css';

const Header: FC = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <div className='logo-group'>
          <StyledTypography>News</StyledTypography>
          <img className='logo-group__logo' src='./src/images/newsIcon.svg' />
        </div>
        <div className="buttons-group">
          <StyledButton variant="contained">Sign in</StyledButton>
          <StyledButton variant="contained">Sign up</StyledButton>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Header;