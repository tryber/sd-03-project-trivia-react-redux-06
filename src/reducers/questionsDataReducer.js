import { INDEX_ADD } from '../actions/newQuestionAction';

const INITIAL_STATE = {
  index: 0,
}

const questionsDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INDEX_ADD: 
      return {
        ...state,
        index: state.index + 1
      };
    default:
      return state;
  }
}

export default questionsDataReducer;
