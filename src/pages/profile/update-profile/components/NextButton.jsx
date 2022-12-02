import React from "react";
import { Link } from "react-router-dom";
const NextButton = ({ link, text, button }) => {
	return button ? (
		<div className="pt-2 md:pt-7 text-center">
			<button className="btn h-[49px] px-8 lg:text-[25px]">{text}</button>
		</div>
	) : (
		<div className="pt-2 md:pt-7 text-center">
			<Link to={link} className="btn py-3 px-10">
				{text}
			</Link>
		</div>
	);
};

export default NextButton;
