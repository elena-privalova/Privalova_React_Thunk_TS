import { FC } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, MenuItem } from '@mui/material';

import { Search, SearchIconWrapper, StyledButton, StyledInputBase, StyledSelect, StyledToolbar, StyledTypography } from './style.ts';

import './Header.css';

const Header: FC = () => {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#C1B59F' }}>
        <StyledToolbar>
          <div className="logo-group">
            <StyledTypography>News</StyledTypography>
            <img className='logo-group__logo' src='./src/images/newsIcon.svg' />
          </div>
          <div className="search-group">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
              />
            </Search>
            <FormControl>
              <StyledSelect
                sx={{
                  height: '40px'
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </StyledSelect>
            </FormControl>
          </div>
          <div className="buttons-group">
            <StyledButton variant="contained">Sign in</StyledButton>
            <StyledButton variant="contained">Sign up</StyledButton>
          </div>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default Header;