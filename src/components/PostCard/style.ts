import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import './PostCard.css';

export const StyledCard = styled(Card)({
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px',
  width: '45%',
  minWidth: '295px',
  maxWidth: '345px',
  minHeight: '600px',
  maxHeight: '680px',
  paddingLeft: '10px',
  paddingRight: '10px',
  position: 'relative',
  overflow: 'visible',
  borderRadius: '20px',
  background: '#E3DED1',
  border: '2px solid #c3c6ce',
  transition: '0.5s ease-out',
});

export const StyledSubheader = {
  subheaderTypographyProps: {
    marginLeft: '10px',
    fontFamily: 'Raleway',
    color: '#4F493F',
    fontSize: '16px',
  },
};

export const StyledCardHeader = {
  titleTypographyProps: {
    fontFamily: 'Raleway',
    color: 'black',
    fontSize: '20px',
    letterSpacing: '1px',
    fontWeight: 'bolder'
  },
  styledDateProps: {
    marginTop: '-35px',
    marginLeft: '10px',
    fontFamily: 'Raleway',
    color: '#4F493F',
    fontSize: '16px'
  }
};

export const StyledTypography = styled(Typography)({
  height: '200px',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  WebkitLineClamp: 10,
  wordWrap: 'break-word'
});

export const StyledCardContent = styled(CardContent)({
  height: '350px'
})