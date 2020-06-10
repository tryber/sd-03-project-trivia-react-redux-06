import { GET_GRAVATAR, GET_GRAVATAR_SUCCESS, GET_GRAVATAR_FAILURE } from '../actions/gravatarAction';

const initialState = {
  email: '',
  token: '',
};

const gravatarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GRAVATAR:
      return {
        ...state,
      };
    case GET_GRAVATAR_SUCCESS:
      return {
        ...state,
        email: action.email,
        token: action.token,
      };
    case GET_GRAVATAR_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
};

export default gravatarReducer;
