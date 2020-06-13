import {
  GET_GRAVATAR,
  GET_GRAVATAR_SUCCESS,
  GET_GRAVATAR_FAILURE,
} from '../actions/gravatarAction';

const INITIAL_STATE = {
  picture: '',
  loading: false,
};

const gravatarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GRAVATAR:
      return {
        ...state,
        loading: true,
      };
    case GET_GRAVATAR_SUCCESS:
      return {
        ...state,
        picture: action.picture,
        loading: false,
      };
    case GET_GRAVATAR_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default gravatarReducer;
