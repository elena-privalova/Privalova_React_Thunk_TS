import { AppBar } from '@mui/material';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)({
  height: '70px',
  backgroundColor: '#C1B59F'
})

export const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  gap: '10px'
});

export const StyledTypography = styled(Typography)({
  fontSize: '32px',
  letterSpacing: '5px',
  color: '#4F493F'
});

export const StyledButton = styled(Button)({
  backgroundColor: '#4F493F',
  '&:hover': {
    backgroundColor: '#4F493F'
  }
})