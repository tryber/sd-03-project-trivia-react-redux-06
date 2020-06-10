export const GET_GRAVATAR = 'GET_GRAVATAR';
export const GET_GRAVATAR_SUCCESS = 'GET_GRAVATAR_SUCCESS';
export const GET_GRAVATAR_FAILURE = 'GET_GRAVATAR_FAILURE';

export const getGravatarAction = (test) => (
  { type: GET_GRAVATAR, loading: true, test }
);
export const getGravatarSuccess = (token, email) => (
  { type: GET_GRAVATAR_SUCCESS, token, email }
);
export const getGravatarFailure = (error) => (
  { type: GET_GRAVATAR_FAILURE, error }
);

export function catchEmail(token, email) {
  return (dispatch) => {
    dispatch(getGravatarSuccess(token, email));
  };
}
