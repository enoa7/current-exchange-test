import React from "react";
import "./style.css";
import { Translation } from "../Translation";

const Currency = props => {
	return (
		<div className="currency-item">
			<div className="currency-wrapper">
				<div>
					<div className="currency-detail">
						<div className="currency-detail-code">{props.data.name}</div>
						<div className="currency-detail-value">
							{(props.data.value * props.currencyValue).toFixed(2)}
						</div>
					</div>
					<div className="currency-name">{`${props.data.name} - ${Translation[props.data.name]}`}</div>
					<div className="currency-rate">{`1 ${props.data.name} = ${props.data.value}`}</div>
				</div>
				<div>(-)</div>
			</div>
		</div>
	);
};

export default Currency;
