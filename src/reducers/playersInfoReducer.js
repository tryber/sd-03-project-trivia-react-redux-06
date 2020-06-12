import { USERNAME } from '../actions/playersNameAction';

const INITIAL_STATE = {
  username: '',
};

const playersInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};

export default playersInfoReducer;
