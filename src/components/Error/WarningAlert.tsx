
import { type FC } from 'react';
import { Alert, AlertTitle } from '@mui/material';  

import { WarningProps } from './types';

const WarningAlert: FC<WarningProps> = (props) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {props.text}
    </Alert>
  )
}

export default WarningAlert;