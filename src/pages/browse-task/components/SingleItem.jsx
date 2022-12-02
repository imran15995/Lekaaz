import React from "react";
import { Link } from "react-router-dom";
const SingleItem = ({ data }) => {
	return (
		<>
			{data &&
				data.map(({ articleTitle, links }, j) => (
					<div className="mb-4" key={j}>
						{articleTitle && (
							<h3 className="md:text-normal md:font-medium bg-sectionBg px-8 md:px-9 pt-[10px] pb-[7px] border-b border-t border-borderColor leading-[18px]">
								{articleTitle}
							</h3>
						)}
						{links && (
							<ul className="md:text-normal md:text-[18.5px] md:leading-[22px] font-light pt-4 pb-[18px] px-8 md:px-9 flex flex-wrap gap-y-[17px] gap-x-[30px]  tracking-[-0.06em]">
								{links.map(({ name, link }, i) => (
									<li
										className="w-200px xl:w-[calc(25%-23px)]"
										key={i}
									>
										<Link to={link} className="font-light block">
											{name}
										</Link>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
		</>
	);
};

export default SingleItem;
