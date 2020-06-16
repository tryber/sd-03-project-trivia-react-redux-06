import { NEXT_QUESTION } from '../actions/newQuestionAction';
import { CHECKED_ANSWER } from '../actions/checkAnswerAction';
import { TIMER_COUNT } from '../actions/timerCountAction';
import { TIME_OUT } from '../actions/timeOutAction';
import { RESET_GAME } from '../actions/gameResetAction';

const INITIAL_STATE = {
  index: 0,
  correctAnswerClass: '',
  wrongAnswerClass: '',
  disabledBtn: false,
  timerCount: 30,
  points: 0,
  difficulty: 1,
  assertions: 0,
};

const questionsDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return {
        ...state,
        index: state.index + 1,
        correctAnswerClass: '',
        wrongAnswerClass: '',
        disabledBtn: false,
        timerCount: 30,
      };
    case CHECKED_ANSWER:
      return {
        ...state,
        correctAnswerClass: 'correct-answer',
        wrongAnswerClass: 'wrong-answer',
        disabledBtn: true,
        points: state.points + action.points,
        assertions: state.assertions + action.assertions,
      };
    case TIMER_COUNT:
      return { ...state, timerCount: state.timerCount - 1 };
    case TIME_OUT:
      return { ...state, disabledBtn: true, points: state.points + 0 };
    case RESET_GAME:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default questionsDataReducer;
