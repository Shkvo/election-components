export const isLoggedIn = () => {
  return !!localStorage.getItem('token') && !!localStorage.getItem('userId');
};