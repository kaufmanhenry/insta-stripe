import { takeLatest, call, put } from 'redux-saga/effects';

import { USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE } from '../constants/user';

import fetchUsersApi from '../api/user';

function* usersFlow() {
  try {
    const response = yield call(fetchUsersApi);
    yield put({
      type: USERS_SUCCESS,
      response
    });
  } catch (e) {
    yield put({
      type: USERS_FAILURE,
      e
    });
  }
}


function* usersWatcher() {
  yield takeLatest(USERS_REQUEST, usersFlow);
}

export default usersWatcher;
