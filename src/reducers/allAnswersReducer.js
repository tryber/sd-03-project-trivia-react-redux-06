import { ALL_ANSWERS } from '../actions/allAnswersAction';

const INITIAL_STATE = {
  allAnswers: [],
};

const allAnswersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_ANSWERS:
      return {
        ...state,
        allAnswers: action.arrayWithAnswers,
      };
    default:
      return state;
  }
};

export default allAnswersReducer;
