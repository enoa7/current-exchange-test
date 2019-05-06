import React from "react";
import { create } from "react-test-renderer";
import CurrencyComponent from "../index";

describe("Currency component", () => {
	test("it matches the snapshot", () => {
		const mockup = {
			data: {
				name: "name",
				value: "value",
			},
		};
		const component = create(
			<CurrencyComponent data={mockup} currencyValue={1.23} onDeleteSymbol={() => console.log("delete")} />
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
