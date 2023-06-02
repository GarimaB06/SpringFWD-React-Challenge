import React from "react";
import "../stylesheets/tables.css";

const Table = ({
	data = [],
	headerKeys = [],
	renderFunctions = {},
	headersMap = {},
}) => {
	const parseDatum = (headerKey, datum) => {
		if (renderFunctions[headerKey]) {
			return renderFunctions[headerKey](datum);
		}
		const keysArray = headerKey.split(".");
		let result = datum;
		while (keysArray.length) {
			const keyStr = keysArray.shift();
			result = result[keyStr];
		}
		return result;
	};

	const renderNestedData = () => {
		return (
			<tbody>
				{data.map((datum, index) => (
					<tr key={index}>
						{headerKeys.map((headerKey, index) => (
							<td>{parseDatum(headerKey, datum)}</td>
						))}
					</tr>
				))}
			</tbody>
		);
	};

	const renderHeaders = () => {
		return (
			<thead>
				<tr>
					{headerKeys.map((headerKey, index) => (
						<th key={`${index}${headerKey}`}>
							{headersMap[headerKey] ?? headerKey}
						</th>
					))}
				</tr>
			</thead>
		);
	};
	return (
		<div className="table">
			<table>
				{renderHeaders()}
				{renderNestedData()}
			</table>
		</div>
	);
};
export default Table;
