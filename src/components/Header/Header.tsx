import { type FC } from 'react';
import AppBar from '@mui/material/AppBar';

import SearchElement from '../SearchElement/SearchElement';
import FilterElement from '../FilterElement/FilterElement';
import newsIcon from '../../images/newsIcon.svg';

import { 
  StyledBox, 
  StyledButton, 
  StyledToolbar, 
  StyledTypography 
} from './styles';
import './header.css';

const Header: FC = () => {
  return (
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
            <StyledButton variant="contained">Sign in</StyledButton>
            <StyledButton variant="contained">Sign up</StyledButton>
          </div>
        </StyledToolbar>
      </AppBar>
    </StyledBox>
  )
}

export default Header;