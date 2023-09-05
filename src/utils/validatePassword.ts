const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const validatePassword = (password: string): boolean => {
  return PASSWORD_REGEXP.test(password);
};

