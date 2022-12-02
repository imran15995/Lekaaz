import React, { useState } from "react";

const SkillInput = ({ oldValue }) => {
	const [value, setValue] = useState(oldValue);
	const [open, setOpen] = useState(true);

	return (
		open && (
			<div className="w-[calc(50%-15px)] sm:w-[calc(calc(100%/3)-20px)] xl:w-[calc(25%-34px)]">
				<div className="relative">
					<input
						className={`w-full bg-transparent outline-0 border-b border-borderColor text-white text-[14px] md:text-[20px] font-light h-10 pr-5`}
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<span
						onClick={() => setOpen(false)}
						className="absolute bottom-0 h-10 flex justify-center items-center right-0 cursor-pointer"
					>
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
							<path
								d="M11.5563 1.6558L7.31371 5.89844L11.5563 10.1411L10.1421 11.5553L5.89949 7.31265L1.65685 11.5553L0.242641 10.1411L4.48528 5.89844L0.242641 1.6558L1.65685 0.241583L5.89949 4.48422L10.1421 0.241583L11.5563 1.6558Z"
								fill="#C43F3F"
							/>
						</svg>
					</span>
				</div>
			</div>
		)
	);
};

export default SkillInput;
