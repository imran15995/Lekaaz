import React, { useState } from "react";

const Input = ({
	oldVal,
	label,
	input,
	textarea,
	classes,
	inputClass,
	...rest
}) => {
	const [value, setValue] = useState(oldVal);
	return (
		<>
			{input && (
				<div>
					<label
						htmlFor={label}
						className={`font-light text-primary text-[18px] leading-[18px] uppercase mb-[7px] block`}
					>
						{label}
					</label>
					<div className={classes}>
						<input
							className={`w-full bg-transparent outline-0 border-b border-borderColor text-white md:text-[22px] font-light ${inputClass}`}
							id={label}
							{...rest}
						/>
					</div>
				</div>
			)}
			{textarea && (
				<div>
					<label
						htmlFor={label}
						className="font-light text-primary text-[18px] leading-[18px] uppercase mb-[7px] block"
					>
						{label}
					</label>
					<textarea
						className={`pb-3 w-full bg-transparent outline-0 border-b border-borderColor text-white font-light text-[18px] sm:text-[18px] tracking-tighter min-h-[150px] resize-none ${classes}`}
						onChange={(e) => setValue(e.target.value)}
					>
						{value}
					</textarea>
				</div>
			)}
		</>
	);
};

export default Input;
