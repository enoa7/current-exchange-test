import { all } from 'redux-saga/effects';
import { CurrencyWatcher } from './RatesSaga';

export default function* rootSagas() {
  yield all([CurrencyWatcher()]);
}
