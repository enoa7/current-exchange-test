import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Currency from "./component/Currency";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<div>USD - United States Currency</div>
					<div className="d-flex align-items-center justify-content-between">
						<form>
							<div class="form-group">
								<label for="exampleFormControlSelect1">Example select</label>
								<select class="form-control" id="exampleFormControlSelect1">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<small id="emailHelp" class="form-text text-muted">
									We'll never share your email with anyone else.
								</small>
							</div>
						</form>
						{/* <div>USD</div>
						<div>10.000</div> */}
					</div>
				</header>
				<div className="content">
					<div className="currency-list">
						<Currency />
					</div>
				</div>
				<div className="footer">
					<div>(+) Add More Currencies</div>
				</div>
			</div>
		);
	}
}
