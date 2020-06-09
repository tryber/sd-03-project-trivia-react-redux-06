import { NEXT_QUESTION } from '../actions/newQuestionAction';
import { CHECKED_ANSWER } from '../actions/checkAnswerAction';

const INITIAL_STATE = {
  index: 0,
  correctAnswerClass: '',
  wrongAnswerClass: '',
  disabledBtn: false,
}

const questionsDataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NEXT_QUESTION: 
      return {
        ...state,
        index: state.index + 1,
        correctAnswerClass: '',
        wrongAnswerClass: '',
        disabledBtn: false,
      };
    case CHECKED_ANSWER:
      return {
        ...state,
        correctAnswerClass: 'correct-answer',
        wrongAnswerClass: 'wrong-answer',
        disabledBtn: true,
      }
    default:
      return state;
  }
}

export default questionsDataReducer;
