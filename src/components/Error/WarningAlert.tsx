
import { type FC } from 'react';
import { Alert } from '@mui/material';  

import { WarningProps } from './types';

const WarningAlert: FC<WarningProps> = (props) => {
  return (
    <Alert severity={props.type}>
      {props.text}
    </Alert>
  )
}

export default WarningAlert;
