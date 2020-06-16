import {
  API_REQUEST,
  API_RECEIVE_SUCCESS,
  API_RECEIVE_FAILURE,
} from '../actions/apiQuestionsAction';
import { RESET_GAME } from '../actions/gameResetAction';

const INITIAL_STATE = {
  questions: {
    results: [],
  },
  loading: false,
  errorMessage: '',
};

const apiQuestionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUEST:
      return { ...state, loading: true };
    case API_RECEIVE_SUCCESS:
      return {
        ...state,
        questions: {
          response_code: action.questions.response_code, results: [...action.questions.results],
        },
        loading: false,
      };
    case API_RECEIVE_FAILURE:
      return { ...state, errorMessage: action.errorMessage, loading: false };
    case RESET_GAME:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default apiQuestionsReducer;
