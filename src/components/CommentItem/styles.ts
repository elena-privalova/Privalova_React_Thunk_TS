import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const StyledItem = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.08)',
  ...theme.typography.body2,
  padding: '10px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '16px',
  '& >span': {
    marginLeft: '87%',
    marginTop: '10px',
    marginBottom: 0,
    fontFamily: 'Raleway'
  }
}));

export const StyledItemHeader = styled('div')({
  display: 'flex',
  gap: '10px',
  '& span': { marginTop: '8px' }
});

