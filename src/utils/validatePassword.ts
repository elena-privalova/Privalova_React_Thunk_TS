const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const validatePassword = (password: string): boolean => {
  if (password.match(PASSWORD_REGEXP)) return true;
  return false;
};
