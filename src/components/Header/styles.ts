import {
  Toolbar,
  Typography,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledBox = styled(Box)({ backgroundColor: '#C1B59F' });

export const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  gap: '10px',
  height: '70px',
  backgroundColor: '#C1B59F'
});

export const StyledTypography = styled(Typography)({
  fontSize: '32px',
  letterSpacing: '5px',
  color: '#4F493F'
});

export const StyledButton = styled(Button)({
  backgroundColor: '#4F493F',
  '&:hover': { backgroundColor: '#4F493F' }
});

export const StyledAddButton = styled(Button)({
  backgroundColor: '#7B5037',
  minWidth: '35px',
  height: '30px',
  marginTop: '5px',
  '&:hover': { backgroundColor: '#7B5037' }
});

