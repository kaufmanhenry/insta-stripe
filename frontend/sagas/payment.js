import { takeLatest, call, put } from 'redux-saga/effects';

import { GET_PAYMENT_REQUEST, GET_PAYMENT_SUCCESS, GET_PAYMENT_FAILURE } from '../constants/payment';

import { fetchPaymentApi } from '../api/payment';

function* paymentFlow() {
  try {
    const response = yield call(fetchPaymentApi);
    yield put({
      type: GET_PAYMENT_SUCCESS,
      response
    });
  } catch (error) {
    yield put({
      type: GET_PAYMENT_FAILURE,
      error
    });
  }
}


function* paymentsWatcher() {
  yield takeLatest(GET_PAYMENT_REQUEST, paymentFlow);
}

export default paymentsWatcher;
