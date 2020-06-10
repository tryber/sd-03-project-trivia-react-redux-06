import apiQuestionRequest from '../service/apiQuestionsRequest';

export const API_REQUEST = 'API_REQUEST';
export const API_RECEIVE_SUCCESS = 'API_RECEIVE_SUCCESS';
export const API_RECEIVE_FAILURE = 'API_RECEIVE_FAILURE';

const apiRequestControl = () => ({
  type: API_REQUEST,
});

const receiveApiDataSuccess = (questions) => ({
  type: API_RECEIVE_SUCCESS,
  questions,
});

const receiveApiDataFailure = (error) => ({
  type: API_RECEIVE_SUCCESS,
  errorMessage: error,
});

export function getApiQuestions(token) {
  return (dispatch) => {
    dispatch(apiRequestControl());

    return apiQuestionRequest(token)
      .then(
        (questions) => dispatch(receiveApiDataSuccess(questions)),
        (error) => dispatch(receiveApiDataFailure(error.message)),
      );
  };
}
