import React from "react";

const Input = ({ placeholder, label, input, textarea, subtext, ...rest }) => {
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
					<div className="text-[#40494F] mb-3">{subtext}</div>
					<div>
						<input
							className={`w-full bg-transparent outline-0 border-b border-borderColor text-white md:text-[20px] font-light pb-2`}
							id={label}
							placeholder={placeholder}
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
					<div className="text-[#40494F] mb-3">{subtext}</div>
					<textarea
						className={`p-4 w-full bg-transparent outline-0 border border-borderColor text-white font-light text-[18px] sm:text-[18px] tracking-tighter min-h-[150px] resize-none`}
						placeholder={placeholder}
						{...rest}
					></textarea>
				</div>
			)}
		</>
	);
};

export default Input;
