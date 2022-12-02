import React from "react";

const SectionHeader = ({ icon, title, text }) => {
	return (
		<>
			{icon && <div className="sm:mb-6 flex justify-center">{icon}</div>}
			<div className="mb-8 lg:mb-[43px]">
				{title && (
					<h2 className="text-base md:text-lg lg:text-2xl text-center">
						{title}
					</h2>
				)}
				{text && (
					<div className="text-normal mt-[15px] mx-auto max-w-[539px] text-center md:leading-[22px]">
						{text}
					</div>
				)}
			</div>
		</>
	);
};

export default SectionHeader;
