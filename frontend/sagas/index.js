import UserSaga from './user';

export default function* IndexSaga() {
  yield [
    UserSaga()
  ];
}
