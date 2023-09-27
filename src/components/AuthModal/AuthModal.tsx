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
import {
  Modal,
  IconButton,
  InputAdornment
} from '@mui/material';
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
      isAuthVisible: false,
      currentType
    }));
    setEmail('');
    setPassword('');
    setCorrectEmail(true);
    setCorrectPassword(true);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setShowPassword] = useState(false);
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
                required
                onBlur={handleBlurEmail}
                onChange={handleChangeEmail}
                error={!isCorrectEmail || authError !== ''}
                helperText={!isCorrectEmail ? 'Email must be correct' : ''}
              />
              <StyledTextField
                variant="outlined"
                label="Password"
                type={isShow ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {isShow ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                value={password}
                required
                onChange={handleChangePassword}
                onBlur={handleBlurPassword}
                error={!isCorrectPassword || authError !== ''}
                helperText={!isCorrectPassword ? '8 symbols, letters in both cases, numbers' : ''}
              />
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

