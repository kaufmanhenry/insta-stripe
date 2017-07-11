import PaymentSaga from './payment';

export default function* IndexSaga() {
  yield [
    PaymentSaga()
  ];
}
