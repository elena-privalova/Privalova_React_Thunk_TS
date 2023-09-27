import {
  Box,
  Card
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledInfoCard = styled(Card)({
  userSelect: 'none',
  width: '95%',
  maxWidth: '620px',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  gap: '10px',
  padding: '10px',
  margin: '10px 0',
  backgroundColor: '#E3DED1'
});

export const StyledBox = styled(Box)({ width: '100%' });

