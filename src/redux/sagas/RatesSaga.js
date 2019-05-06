import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { ACTION_TYPES } from "../constants";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* CurrencyWatcher() {
	yield takeLatest(ACTION_TYPES.FETCH_LATEST_REQUEST, fetchLatestCurrency);
	yield takeLatest(ACTION_TYPES.FETCH_SYMBOLS_REQUEST, fetchUserCurrencies);
}

// function that makes the api request and returns a Promise for response
function apiUrl(args) {
	return axios({
		method: "get",
		url: `https://api.exchangeratesapi.io/${args}`,
	});
}

// worker saga: makes the api call when watcher saga sees the action
function* fetchLatestCurrency(data) {
	let currency = data.payload;
	try {
		const response = yield call(apiUrl, `latest?base=${currency}`);
		const rates = response.data;

		// dispatch a success action to the store with the new rates
		yield put({ type: ACTION_TYPES.FETCH_LATEST_SUCCESS, payload: rates });
	} catch (error) {
		console.log(error);
		// dispatch a failure action to the store with the error
		yield put({ type: ACTION_TYPES.FETCH_LATEST_FAIL, error });
	}
}

function* fetchUserCurrencies(data) {
	let currency = data.payload;
	try {
		const response = yield call(apiUrl, `latest?base=${currency.base}&symbols=${currency.currencies.join(",")}`);
		const rates = response.data;

		// dispatch a success action to the store with the new rates
		yield put({ type: ACTION_TYPES.FETCH_SYMBOLS_SUCCESS, payload: rates });
	} catch (error) {
		console.log(error);
		// dispatch a failure action to the store with the error
		yield put({ type: ACTION_TYPES.FETCH_SYMBOLS_FAIL, error });
	}
}
