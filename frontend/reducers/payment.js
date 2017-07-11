import { GET_PAYMENT_REQUEST, GET_PAYMENT_SUCCESS, GET_PAYMENT_FAILURE } from '../constants/payment';

const defaultState = {
  loading: false,
  loaded: false,
  payment: {}
};

export default function (state = defaultState, action) {
  const { response } = action;
  switch (action.type) {
    case GET_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case GET_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        payment: response
      };
    case GET_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
}
