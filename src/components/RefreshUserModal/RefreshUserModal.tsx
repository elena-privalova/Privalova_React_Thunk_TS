import {
  ChangeEvent, FocusEvent, FormEvent, MouseEvent, useEffect, useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { AppDispatch, RootState } from '../../pages/Main/types';
import { changeRefreshVisibility } from '../../store/modals/slicesRefreshModal';
import { refreshAuthUser } from '../../store/auth';
import { clearAuth } from '../../store/auth/slicesAuth';
import { validateEmail } from '../../utils/validateEmail';
import { validatePassword } from '../../utils/validatePassword';
import WarningAlert from '../Error/WarningAlert';
import {
  StyledButton,
  StyledForm,
  StyledLoader,
  StyledTextField,
  StyledTypography
} from '../AuthModal/styles';

import { StyledIconButton } from './styles';
import './refreshUser.css';

const RefreshUserModal = () => {
  const { isRefreshVisible } = useSelector((state: RootState) => state.refreshModal);
  const { isAuthLoading, authUser, authError, isSuccessRefresh } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    dispatch(changeRefreshVisibility({ isRefreshVisible: false }));
    dispatch(clearAuth('refresh'));
    setFirstName(authUser.firstName);
    setLastName(authUser.lastName);
    setEmail(authUser.email);
    setPassword('');
    setFile(null);
    setCorrectEmail(true);
    setCorrectPassword(true);
  };

  const [firstName, setFirstName] = useState(authUser.firstName);
  const [lastName, setLastName] = useState(authUser.lastName);
  const [email, setEmail] = useState(authUser.email);
  const [password, setPassword] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [show, setShowPassword] = useState(false);
  const [isCorrectEmail, setCorrectEmail] = useState(true);
  const [isCorrectPassword, setCorrectPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) setFile(event.target.files[0]);
  };

  const handleBlurEmail = (event: FocusEvent<HTMLInputElement>) => {
    setCorrectEmail(validateEmail(event.target.value));
  };

  const handleBlurPassword = (event: FocusEvent<HTMLInputElement>) => {
    setCorrectPassword(validatePassword(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(refreshAuthUser({
      id: authUser.id,
      refreshUser: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        file: file
      }
    }));
  };

  useEffect(() => {
    if (isSuccessRefresh) handleClose();
  }, [isSuccessRefresh]);

  const isDisable = !isCorrectEmail ||
    !isCorrectPassword ||
    password === '';

  return (
    <Modal
      open={isRefreshVisible}
      onClose={handleClose}
    >
      <>
        <StyledForm className="refresh-form" onSubmit={handleSubmit}>
          {isAuthLoading && (
            <StyledLoader className="refresh-form__loader" color="inherit" />
          )}
          {!isAuthLoading && authError === '' && (
            <>
              <StyledTypography>ABOUT ME</StyledTypography>
              <StyledTextField
                variant="outlined"
                label="First name"
                value={firstName}
                onChange={handleChangeFirstName}
              />
              <StyledTextField
                variant="outlined"
                label="Last name"
                value={lastName}
                onChange={handleChangeLastName}
              />
              <StyledTextField
                variant="outlined"
                label="Email"
                value={email}
                onBlur={handleBlurEmail}
                onChange={handleChangeEmail}
                error={!isCorrectEmail}
              />
              <StyledTextField
                variant="outlined"
                label="Password"
                value={password}
                onChange={handleChangePassword}
                onBlur={handleBlurPassword}
                error={!isCorrectPassword}
              />
              <StyledIconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {show ? <Visibility /> : <VisibilityOff />}
              </StyledIconButton>
              <label className="news-form__file-group">
                <input
                  name="Picture"
                  type="file"
                  onChange={handleChangeFile}
                />
                <span className="file-group__text">Change avatar</span>
                { file != null && (
                  <span className="file-group__file-name">{file.name}</span>
                )}
              </label>
              <StyledButton
                variant="contained"
                type="submit"
                disabled={isDisable}
              >
                REFRESH
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

export default RefreshUserModal;

