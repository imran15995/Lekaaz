import React from "react";

const Cross = () => {
	return (
		<svg
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12.5" cy="12.5" r="12.5" fill="white" />
			<line
				x1="9.37962"
				y1="8.06445"
				x2="16.5773"
				y2="15.2621"
				stroke="#C43F3F"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				x1="8.42334"
				y1="15.262"
				x2="15.621"
				y2="8.0643"
				stroke="#C43F3F"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default Cross;
