import React from "react";
import { Link } from "react-router-dom";
const ButtonWithIcon = ({ text, button, link }) => {
	return (
		<>
			{button ? (
				<button
					type="button"
					className="btn btn-sm uppercase pt-[12px] pb-[5px] flex items-center group"
				>
					{text}
					<svg
						width="14"
						viewBox="0 0 14 14"
						fill="none"
						className="ml-1 translate-y-[-2px]"
					>
						<path
							d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
							className="group-hover:fill-primary"
							fill="black"
						/>
					</svg>
				</button>
			) : (
				<Link
					to={link}
					type="button"
					className="btn btn-sm uppercase pt-3 pb-[6px] flex items-center group"
				>
					{text}
					<svg
						width="14"
						viewBox="0 0 14 14"
						fill="none"
						className="ml-1 translate-y-[-2px]"
					>
						<path
							d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
							className="group-hover:fill-primary"
							fill="black"
						/>
					</svg>
				</Link>
			)}
		</>
	);
};

export default ButtonWithIcon;
