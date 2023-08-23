import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const StyledDetailCard = styled(Card)({
  userSelect: 'none',
  width: '95%',
  height: '95%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  gap: '10px',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#E3DED1'
});
