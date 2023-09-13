export const getToken = (): string | null | void => {
  try {
    return localStorage.getItem('token');
  }
  catch (e) {
    if (e instanceof Error) return e.message;
  }
};

export const setToken = (token: string): string | void => {
  try {
    localStorage.setItem('token', token);
  }
  catch (e) {
    if (e instanceof Error) return e.message;
  }
};

export const removeToken = (): string | void => {
  try {
    localStorage.removeItem('token');
  }
  catch (e) {
    if (e instanceof Error) return e.message;
  }
};

