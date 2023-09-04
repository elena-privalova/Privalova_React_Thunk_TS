export const getToken = () => {
  try {
    return localStorage.getItem('token');
  } 
  catch (e) {
    console.log(e);
  }
};
  
export const setToken = (token: string) => {
  try {
    localStorage.setItem('token', token);
  }
  catch (e) {
    if (e instanceof Error) return e.message;
  }
};

export const removeToken = () => {
  try {
    localStorage.removeItem('token');
  } 
  catch (e) {
    if (e instanceof Error) return e.message;
  }
};
