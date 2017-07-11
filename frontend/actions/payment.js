import { GET_PAYMENT_REQUEST } from '../constants/payment';

export default function fetchPaymentRequest() {
  return {
    type: GET_PAYMENT_REQUEST
  };
}
