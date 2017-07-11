import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_PAYMENT_REQUEST,
  GET_PAYMENT_SUCCESS,
  GET_PAYMENT_FAILURE,
  CHARGE_PAYMENT_REQUEST,
  CHARGE_PAYMENT_SUCCESS,
  CHARGE_PAYMENT_FAILURE
} from '../constants/payment';

import { fetchPaymentApi, chargePaymentApi } from '../api/payment';

function* getPaymentFlow() {
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

function* chargePaymentFlow(action) {
  try {
    const { token } = action;
    const response = yield call(chargePaymentApi, token);
    yield put({
      type: CHARGE_PAYMENT_SUCCESS,
      response
    });
  } catch (error) {
    yield put({
      type: CHARGE_PAYMENT_FAILURE,
      error
    });
  }
}


function* paymentsWatcher() {
  yield takeLatest(GET_PAYMENT_REQUEST, getPaymentFlow);
  yield takeLatest(CHARGE_PAYMENT_REQUEST, chargePaymentFlow);
}

export default paymentsWatcher;
