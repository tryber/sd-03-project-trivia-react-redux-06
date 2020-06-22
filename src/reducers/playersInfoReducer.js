import { LOGIN } from '../actions/playersNameAction';

const INITIAL_STATE = {
  username: '',
  email: '',
};

const playersInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.username,
        email: action.email,
      };
    default:
      return state;
  }
};

export default playersInfoReducer;
