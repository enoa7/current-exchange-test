import React, { Component, Fragment } from "react";
// import logo from './logo.svg';
import "./App.css";
import Currency from "./component/Currency";
import { connect } from "react-redux";
import { ACTION_TYPES } from "./redux/constants";
import Loader from "react-loader-spinner";
import { Translation } from "./Translation";

class App extends Component {
	state = {
		showLists: false,
		selectedCurrency: "USD",
		selectedCurrencyValue: 10.0,
		currencies: ["IDR", "GBP"],
		newCurrencies: "BGD",
	};

	componentDidMount() {
		// console.log("props => DID MOUNT", this.props);
		const { fetchCurrency, fetchSelectedCurrencies } = this.props;
		const { selectedCurrency, currencies } = this.state;
		fetchCurrency(selectedCurrency); // fetch post on mount
		fetchSelectedCurrencies({
			base: selectedCurrency,
			currencies,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		const { fetchCurrency, fetchSelectedCurrencies } = this.props;
		const { selectedCurrency, currencies } = this.state;
		console.log("props => DID UPDATE", this.props);
		console.log("state => DID UPDATE", this.state);

		if (prevState.currencies !== this.state.currencies) {
			fetchSelectedCurrencies({
				base: selectedCurrency,
				currencies,
			});
		}

		if (prevState.selectedCurrency !== this.state.selectedCurrency) {
			fetchCurrency(selectedCurrency);

			fetchSelectedCurrencies({
				base: selectedCurrency,
				currencies,
			});
		}
	}

	onChangeCurrency = event => {
		this.setState({ selectedCurrency: event.target.value });
	};

	onChangeCurrencyValue = event => {
		this.setState({ selectedCurrencyValue: event.target.value });
	};

	onSymbolsAdd = event => {
		const { newCurrencies } = this.state;
		console.log(newCurrencies);
		this.setState(prevState => ({
			currencies: [...prevState.currencies, newCurrencies],
		}));

		event.preventDefault();
	};

	toggleListOfCurrencies = () => {
		this.setState(prevState => ({
			showLists: !prevState.showLists,
		}));
	};

	render() {
		const { isLoading, listOfCurrency, listOfSymbols } = this.props;
		const { selectedCurrency, selectedCurrencyValue, newCurrencies, showLists } = this.state;
		return (
			<div className="app">
				{isLoading && (
					<div className="loader-wrapper">
						<div className="loader-inner">
							<Loader type="ThreeDots" color="#00BFFF" height="50" width="50" />
						</div>
					</div>
				)}
				<Fragment>
					<header className="app-header">
						<div>{`${selectedCurrency} - ${Translation["USD"]}`}</div>
						<div className="d-flex align-items-center justify-content-between">
							<form>
								<div className="form-group">
									<div className="d-flex justify-content-between align-items-center">
										<label htmlFor="selectCurrency" hidden />
										<select
											className="form-control custom-select"
											id="selectCurrency"
											value={selectedCurrency}
											onChange={this.onChangeCurrency}>
											{Object.keys(listOfCurrency).map((e, i) => {
												return (
													<option value={e} key={i}>
														{e}
													</option>
												);
											})}
										</select>
										<input
											className="form-control custom-input"
											type="text"
											value={selectedCurrencyValue}
											onChange={this.onChangeCurrencyValue}
										/>
									</div>
								</div>
							</form>
						</div>
					</header>
					<div className="content">
						<div className="currency-list">
							{listOfSymbols &&
								listOfSymbols.map((e, i) => {
									return <Currency data={e} key={i} currencyValue={selectedCurrencyValue} />;
								})}
						</div>
					</div>
					<div className="footer">
						<button type="button" className="btn btn-link" onClick={this.toggleListOfCurrencies}>
							(+) Add More Currencies
						</button>
						{showLists && (
							<form onSubmit={this.onSymbolsAdd}>
								<div className="mx-3">
									<select
										className="form-control custom-select"
										id="addNewCurrency"
										value={newCurrencies}
										onChange={e => this.setState({ newCurrencies: e.target.value })}>
										{Object.keys(listOfCurrency).map((e, i) => {
											return (
												<option value={e} key={i}>
													{e}
												</option>
											);
										})}
									</select>
									<button type="submit" className="btn btn-primary">
										Submit
									</button>
								</div>
							</form>
						)}
					</div>
				</Fragment>
			</div>
		);
	}
}

const handleRates = rates => {
	return Object.keys(rates).map((e, i) => ({
		name: e,
		value: rates[e],
	}));
};

/** Connect to Redux */
const mapStateToProps = ({ CurrencyReducer, SymbolsReducer }) => ({
	isLoading: CurrencyReducer.fetching,
	baseRates: CurrencyReducer.data ? CurrencyReducer.data.base : "USD",
	listOfCurrency: CurrencyReducer.data ? CurrencyReducer.data.rates : {},
	listOfSymbols: SymbolsReducer.data ? handleRates(SymbolsReducer.data.rates) : [],
});

const mapDispatchToProps = dispatch => ({
	fetchCurrency: currency => dispatch({ type: ACTION_TYPES.FETCH_LATEST_REQUEST, payload: currency }),
	fetchSelectedCurrencies: currencies => dispatch({ type: ACTION_TYPES.FETCH_SYMBOLS_REQUEST, payload: currencies }),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
