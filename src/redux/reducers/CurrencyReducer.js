import { ACTION_TYPES } from "../constants";

// reducer with initial state
const initialState = {
	fetching: false,
	error: null,
	data: null,
};

export default function CurrencyReducer(state = initialState, action = null) {
	switch (action.type) {
		case ACTION_TYPES.FETCH_LATEST_REQUEST:
			return { ...state, fetching: true, error: null };
		case ACTION_TYPES.FETCH_LATEST_FAIL:
			return { ...state, fetching: false, data: null, error: action.error };
		case ACTION_TYPES.FETCH_LATEST_SUCCESS:
			return { ...state, fetching: false, data: action.payload };
		default:
			return state;
	}
}
