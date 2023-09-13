import {
  useState,
  type FC,
  MouseEvent,
  ChangeEvent,
  FormEvent,
  FocusEvent,
  useEffect
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { clearAuth } from '../../store/auth/slicesAuth';
import { changeAuthVisibility } from '../../store/modals/slicesAuthModals';
import { logInUser, signUpUser } from '../../store/auth';
import { CURRENT_AUTH_TYPE_VALUES } from '../../store/modals/types';
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
import './authModal.css';

const AuthModal: FC = () => {
  const {
    isAuthLoading,
    authUser,
    authError
  } = useSelector((state: RootState) => state.auth);
  const { isAuthVisible, currentType } = useSelector((state: RootState) => state.authModals);

  const authorizationType = currentType === CURRENT_AUTH_TYPE_VALUES.login ? logInUser : signUpUser;

  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    dispatch(clearAuth(currentType));
    dispatch(changeAuthVisibility({
      isVisible: false,
      kind: currentType
    }));
    setEmail('');
    setPassword('');
    setCorrectEmail(true);
    setCorrectPassword(true);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShowPassword] = useState(false);
  const [isCorrectEmail, setCorrectEmail] = useState(true);
  const [isCorrectPassword, setCorrectPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleBlurEmail = (event: FocusEvent<HTMLInputElement>) => {
    setCorrectEmail(validateEmail(event.target.value));
  };

  const handleBlurPassword = (event: FocusEvent<HTMLInputElement>) => {
    setCorrectPassword(validatePassword(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(authorizationType({
      email: email,
      password: password
    }));
  };

  useEffect(() => {
    if (authUser != null) handleClose();
  }, [authUser]);

  return (
    <Modal
      open={isAuthVisible}
      onClose={handleClose}
    >
      <>
        <StyledForm onSubmit={handleSubmit}>
          {isAuthLoading && (
            <StyledLoader color="inherit" />
          )}
          {!isAuthLoading && (
            <>
              <StyledTypography>{currentType.toUpperCase()}</StyledTypography>
              <StyledTextField
                variant="outlined"
                label="Email"
                value={email}
                onBlur={handleBlurEmail}
                onChange={handleChangeEmail}
                error={!isCorrectEmail || authError !== ''}
              />
              <StyledTextField
                variant="outlined"
                label="Password"
                InputProps={{ type: `${show ? 'text' : 'password'}` }}
                value={password}
                onChange={handleChangePassword}
                onBlur={handleBlurPassword}
                error={!isCorrectPassword || authError !== ''}
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
                  !validateEmail(email) ||
                  !validatePassword(password) ||
                  email === '' ||
                  password === ''
                }
              >
                {currentType}
              </StyledButton>
            </>
          )}
        </StyledForm>
        {authError !== '' && (
          <div className="modal__alert">
            <WarningAlert text="Некорректно введенные данные" type="error" />
          </div>
        )}
      </>
    </Modal>
  );
};

export default AuthModal;

