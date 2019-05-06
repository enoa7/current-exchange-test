import React from "react";
import "./style.css";
import { Translation } from "../../Translation";

const Currency = ({ data, currencyValue, onDeleteSymbols }) => {
	const { name, value } = data;
	let title = data ? name : "";
	return (
		<div className="currency-item">
			<div className="currency-wrapper">
				<div>
					<div className="currency-detail">
						<div className="currency-detail-code">{title}</div>
						<div className="currency-detail-value">{(value * currencyValue).toFixed(2)}</div>
					</div>
					<div className="currency-name">{`${name} - ${Translation[name]}`}</div>
					<div className="currency-rate">{`1 ${name} = ${value}`}</div>
				</div>
				<div className="pointer-click" onClick={() => onDeleteSymbols(name)}>
					(-)
				</div>
			</div>
		</div>
	);
};

export default Currency;
