
import { type FC } from 'react';
import { Alert, AlertTitle } from "@mui/material";  

import { ErrorProps } from "./types";

const ErrorAlert: FC<ErrorProps> = (props) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {props.text}
    </Alert>
  )
}

export default ErrorAlert;