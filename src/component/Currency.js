import React from "react";
import "./style.css";

const Currency = props => {
	return (
		<div className="currency-item">
			<div className="currency-wrapper">
				<div>
					<div className="currency-detail">
						<div className="currency-detail-code">IDR</div>
						<div className="currency-detail-value">144,104.50</div>
					</div>
					<div className="currency-name">IDR - Indonesian Rupiah</div>
					<div className="currency-rate">1 USD = IDR 14,410.45</div>
				</div>
				<div>(-)</div>
			</div>
		</div>
	);
};

export default Currency;
