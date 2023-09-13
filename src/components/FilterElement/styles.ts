import {
  Select,
  InputBase,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSelect = styled(Select)({
  borderColor: '#908471',
  paddingLeft: '5px',
  height: '40px'
});

export const StyledInput = styled(InputBase)({
  height: '40px',
  border: '1px solid #4F493F',
  borderRadius: '10px',
  '& .MuiInputBase-input:focus': {
    color: '#4F493F',
    borderColor: '#4F493F'
  },
  '&.Mui-focused fieldset': { borderColor: '#4F493F' }
});

export const StyledMenuItem = styled(MenuItem)({
  color: '#908471',
  letterSpacing: '1px',
  borderBottom: '1px solid #908471'
});

