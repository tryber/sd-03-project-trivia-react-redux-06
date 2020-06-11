import { combineReducers } from 'redux';
import questionsDataReducer from './questionsDataReducer';
import gravatarReducer from './gravatarReducer';
import apiQuestionsReducer from './apiQuestionsReducer';
import allAnswersReducer from './allAnswersReducer';

const rootReducer = combineReducers({
  questionsDataReducer,
  gravatarReducer,
  apiQuestionsReducer,
  allAnswersReducer,
});

export default rootReducer;
