export const LOGIN = 'USERNAME';

export const playersNameAction = (username, email) => ({
  type: LOGIN,
  username,
  email,
});
