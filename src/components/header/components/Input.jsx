import React from "react";

const Input = ({ icon, className, ...rest }) => {
	return (
		<>
			<div className={`relative  ${className}`}>
				<input
					className={`h-[39px] rounded-full border-0 outline-0 w-full placeholder:font-light pt-1 text-bodyBg ${
						icon ? "pl-11" : "px-3"
					}`}
					{...rest}
				/>
				{icon && (
					<span className="absolute h-full flex items-center justify-center left-3 top-[0]">
						{icon}
					</span>
				)}
			</div>
		</>
	);
};

export default Input;
