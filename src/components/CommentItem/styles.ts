import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const StyledItem = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.08)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '16px'
}));
