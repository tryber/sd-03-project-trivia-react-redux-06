import { combineReducers } from 'redux';
import questionsDataReducer from './questionsDataReducer'
import gravatarReducer from './gravatarReducer';

const rootReducer = combineReducers({ questionsDataReducer, gravatarReducer });

export default rootReducer;
