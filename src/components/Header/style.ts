import { Button, InputBase, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  gap: '10px',
  height: '70px',
  backgroundColor: '#C1B59F'
});

export const StyledTypography = styled(Typography)({
  fontSize: '32px',
  fontFamily: 'Playfair Display SC',
  letterSpacing: '5px',
  color: '#4F493F'
});

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const StyledSelect = styled(Select)({
  borderColor: '#908471',
  paddingLeft: '5px',
});

export const StyledInput = styled(InputBase)({
  height: '40px',
  border: '1px solid #4F493F',
  borderRadius: '10px',
  '& .MuiInputBase-input:focus': {
    color: '#4F493F',
    borderColor: '#4F493F'
  }
});

export const StyledMenuItem = styled(MenuItem)({
  color: '#908471',
  letterSpacing: '1px',
  borderBottom: '1px solid #908471'
});

export const StyledButton = styled(Button)({
  backgroundColor: '#4F493F',
  '&:hover': {
    backgroundColor: '#4F493F'
  }
});