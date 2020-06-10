import { combineReducers } from 'redux';
import questionsDataReducer from './questionsDataReducer';
import gravatarReducer from './gravatarReducer';
import apiQuestionsReducer from './apiQuestionsReducer';

const rootReducer = combineReducers({ questionsDataReducer, gravatarReducer, apiQuestionsReducer });

export default rootReducer;
