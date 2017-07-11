import { GET_PAYMENT_REQUEST, CHARGE_PAYMENT_REQUEST } from '../constants/payment';

export function fetchPaymentRequest() {
  return {
    type: GET_PAYMENT_REQUEST
  };
}

export function chargePaymentRequest({ token }) {
  return {
    type: CHARGE_PAYMENT_REQUEST,
    token
  };
}
