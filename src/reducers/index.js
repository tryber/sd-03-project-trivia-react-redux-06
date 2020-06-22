import { combineReducers } from 'redux';
import questionsDataReducer from './questionsDataReducer';
import gravatarReducer from './gravatarReducer';
import apiQuestionsReducer from './apiQuestionsReducer';
import allAnswersReducer from './allAnswersReducer';
import playersInfoReducer from './playersInfoReducer';

const rootReducer = combineReducers({
  questionsDataReducer,
  gravatarReducer,
  apiQuestionsReducer,
  allAnswersReducer,
  playersInfoReducer,
});

export default rootReducer;
