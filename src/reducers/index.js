import { combineReducers } from 'redux';
import questionsDataReducer from './questionsDataReducer'

const rootReducer = combineReducers({ questionsDataReducer });

export default rootReducer;
