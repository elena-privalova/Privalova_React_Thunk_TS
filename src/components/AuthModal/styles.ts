import {
  Button,
  CircularProgress,
  TextField,
  Typography,
  styled
} from '@mui/material';

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '350px',
  height: '300px',
  padding: '20px 10px',
  backgroundColor: '#E3DED1',
  border: '1px solid #908471',
  borderRadius: '10px',
  boxShadow: 24
});

export const StyledLoader = styled(CircularProgress)({ marginTop: '35%' });

export const StyledTypography = styled(Typography)({
  color: '#47493F',
  fontSize: '18px',
  letterSpacing: '1px'
});

export const StyledTextField = styled(TextField)({
  width: '75%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid #4F493F',
      borderRadius: '10px'
    },
    '&.Mui-focused fieldset': {
      border: '1px solid #4F493F',
      color: '#4F493F'
    }
  }
});

export const StyledButton = styled(Button)({
  backgroundColor: '#7B5037',
  '&:hover': { backgroundColor: '#7B5037' }
});

