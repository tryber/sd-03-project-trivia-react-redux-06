import { gerarToken, getQuestions } from '../Services/triviaApi';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILURE = 'GET_TOKEN_FAILURE';

export const questionsAction = () => (
  { type: GET_QUESTIONS, loading: true }
);

export const questionsSuccess = (data) => (
  { type: GET_QUESTIONS_SUCCESS, data, loading: false }
);

export const questionsFailure = (error) => (
  { type: GET_QUESTIONS_FAILURE, error, loading: false }
);

export const getToken = () => (
  { type: GET_TOKEN, loading: true }
);

export const tokenSuccess = (token) => (
  { type: GET_TOKEN_SUCCESS, token, loading: false }
);

export const tokenFailure = (error) => (
  { type: GET_TOKEN_FAILURE, error, loading: false }
);

export function thunkToken() {
  return (dispatch) => {
    dispatch(getToken());
    return gerarToken()
      .then(
        (data) => dispatch(tokenSuccess(data)),
        (error) => dispatch(tokenFailure(error.message)),
      );
  };
}

export function thunkQuestions(token) {
  return (dispatch) => {
    dispatch(questionsAction());
    return getQuestions(token)
      .then(
        (data) => dispatch(questionsSuccess(data)),
        (error) => dispatch(questionsFailure(error.message)),
      );
  };
}
