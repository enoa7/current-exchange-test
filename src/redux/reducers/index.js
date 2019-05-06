import { combineReducers } from "redux";

// import the reducers(stores)
import CurrencyReducer from "./CurrencyReducer";
import SymbolsReducer from "./SymbolsReducer";

export default combineReducers({
	CurrencyReducer,
	SymbolsReducer,
});
