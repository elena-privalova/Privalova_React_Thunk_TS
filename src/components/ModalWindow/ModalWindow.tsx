import {
  useState,
  type FC,
  MouseEvent,
  ChangeEvent,
  FormEvent,
  FocusEvent,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
  changeVisibilityAuthorization,
  changeVisibilityRegistration
} from '../../store/modals/slicesModals';
import { clearLogIn } from '../../store/auth/slicesAuth';
import { clearSignUp } from '../../store/auth/slicesSignUp';
import { logInUser, signUpUser} from '../../store/auth';
import { AppDispatch, RootState } from '../../pages/Main/types';
import { validateEmail } from '../../utils/validateEmail';
import { validatePassword } from '../../utils/validatePassword';
import WarningAlert from '../Error/WarningAlert';

import {
  StyledButton,
  StyledForm,
  StyledIconButton,
  StyledLoader,
  StyledTextField,
  StyledTypography
} from './styles';
import './modalWindow.css'

const ModalWindow: FC = () => {
  const { openRegistration, openAuthorization, currentType } = useSelector((state: RootState) => state.modals);
  const { isLoading, user, isError } = useSelector((state: RootState) => {
    return currentType === 'log in' ? state.auth : state.signup
  });

  const open = currentType === 'log in' ? openAuthorization : openRegistration;
  const handleShow = currentType === 'log in' ? changeVisibilityAuthorization : changeVisibilityRegistration;
  const authorizationType = currentType === 'log in' ? logInUser : signUpUser;
  const clearType = currentType === 'log in' ? clearLogIn : clearSignUp;

  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    dispatch(clearType());
    dispatch(handleShow(!open));
    setEmail('');
    setCorrectEmail(true);
    setCorrectPassword(true);
    setPassword('');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShowPassword] = useState(false);
  const [correctEmail, setCorrectEmail] = useState(true);
  const [correctPassword, setCorrectPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setCorrectEmail(validateEmail(event.target.value));
  };

  const handleBlurEmail = (event: FocusEvent<HTMLInputElement>) => {
    setCorrectEmail(validateEmail(event.target.value));
  }

  const handleBlurPassword = (event: FocusEvent<HTMLInputElement>) => {
    setCorrectPassword(validatePassword(event.target.value));
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setCorrectPassword(validatePassword(event.target.value));
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(authorizationType({
      email: email,
      password: password
    }));
  }

  useEffect(() => {
    if (user != null) handleClose();
  }, [user])

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <>
        <StyledForm onSubmit={handleSubmit}>
          {isLoading && (
            <StyledLoader color="inherit" />
          )}
          {!isLoading && (
            <>
              <StyledTypography>{currentType.toUpperCase()}</StyledTypography>
              <StyledTextField
                variant="outlined"
                label="Email"
                value={email}
                onBlur={handleBlurEmail}
                onChange={handleChangeEmail}
                error={correctEmail || isError ? false : true}
              />
              <StyledTextField
                variant="outlined"
                label="Password"
                InputProps={{ type: `${show ? 'text' : 'password'}` }}
                value={password}
                onBlur={handleBlurPassword}
                onChange={handleChangePassword}
                error={correctPassword || isError ? false : true}
              />
              <StyledIconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                >
                {show ? <Visibility /> : <VisibilityOff />}
              </StyledIconButton>
              <StyledButton
                variant="contained"
                type="submit"
                disabled={
                  !correctEmail || 
                  !correctPassword || 
                  email === '' || 
                  password === ''
                }
              >
                {currentType}
              </StyledButton>
            </>
          )}
        </StyledForm>
        {isError !== '' && (
          <div className="modal__alert">
            <WarningAlert text="Некорректно введенные данные" type="error" />
          </div>
        )}
      </>
    </Modal>
  )
}

export default ModalWindow;
