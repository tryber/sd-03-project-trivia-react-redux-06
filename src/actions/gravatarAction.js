import getApiGravatarRequest from '../service/apiGravatarRequest';

export const GET_GRAVATAR = 'GET_GRAVATAR';
export const GET_GRAVATAR_SUCCESS = 'GET_GRAVATAR_SUCCESS';
export const GET_GRAVATAR_FAILURE = 'GET_GRAVATAR_FAILURE';

const gravatarRequest = () => ({
  type: GET_GRAVATAR,
});

const getGravatarSuccess = (picture) => ({
  type: GET_GRAVATAR_SUCCESS,
  picture,
});

const getGravatarFailure = (error) => ({
  type: GET_GRAVATAR_FAILURE,
  error,
});

export function getApiGravatar(hash) {
  return (dispatch) => {
    dispatch(gravatarRequest());

    return getApiGravatarRequest(hash)
      .then(
        (picture) => dispatch(getGravatarSuccess(picture)),
        (error) => dispatch(getGravatarFailure(error.message)),
      );
  };
}
