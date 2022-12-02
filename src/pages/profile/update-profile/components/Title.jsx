import React from "react";

const Title = ({ title }) => {
	return (
		<div className="text-normal font-normal sm:text-[25px] sm:leading-[25px] border border-borderColor rounded-full pb-3 pt-[14px] px-4 text-center mb-[25px] capitalize">
			{title}
		</div>
	);
};

export default Title;
