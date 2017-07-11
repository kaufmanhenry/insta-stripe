import { USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE } from '../constants/user';

const defaultState = {
  loading: false,
  loaded: false,
  users: []
};

export default function (state = defaultState, action) {
  const { response } = action;
  switch (action.type) {
    case USERS_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: response
      };
    case USERS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
}
