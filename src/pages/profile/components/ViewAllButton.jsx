import React from "react";
import { Link } from "react-router-dom";
const ViewAllButton = ({ link, text, className }) => {
	return (
		<Link
			to={link}
			className={`flex items-center  uppercase text-primary ${className} group`}
		>
			<span className="mr-3 translate-y-[2px]">{text}</span>
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
				<circle
					cx="15"
					cy="15"
					r="15"
					className="fill-primary group-hover:fill-white duration-300"
				/>
				<path
					d="M11.0869 19.4138L15.9241 14.6742L11.0869 9.93449L12.5761 8.47852L18.913 14.6742L12.5761 20.8698L11.0869 19.4138Z"
					fill="#010D15"
				/>
			</svg>
		</Link>
	);
};

export default ViewAllButton;
