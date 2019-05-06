import { ACTION_TYPES } from "../constants";

// reducer with initial state
const initialState = {
	fetching: false,
	error: null,
	data: null,
};

export default function SymbolsReducer(state = initialState, action = null) {
	switch (action.type) {
		case ACTION_TYPES.FETCH_SYMBOLS_REQUEST:
			return { ...state, fetching: true, error: null };
		case ACTION_TYPES.FETCH_SYMBOLS_FAIL:
			return { ...state, fetching: false, data: null, error: action.error };
		case ACTION_TYPES.FETCH_SYMBOLS_SUCCESS:
			return { ...state, fetching: false, data: action.payload };
		default:
			return state;
	}
}
