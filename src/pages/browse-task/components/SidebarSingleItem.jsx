import React from "react";
import { NavLink } from "react-router-dom";

const SidebarSingleItem = ({ data }) => {
	return (
		<>
			{data.map(({ sidebarTitle, links }, j) => (
				<div
					className="rounded-[20px] lg:rounded-[25px] bg-sectionBg w-full"
					key={j}
				>
					{sidebarTitle && (
						<h2 className="text-[20px] md:text-[25px] pt-[14px] pb-2 px-6 m-0 cursor-pointer">
							{sidebarTitle}
						</h2>
					)}
					<div className="">
						<div className="border border-borderColor py-[25px] rounded-[25px] bg-bodyBg sidebar-menu">
							{links && (
								<ul>
									{links.map(({ name, link }, i) => (
										<li key={i}>
											<NavLink
												to={`/browse-task/${link}`}
												className="py-[9px] md:text-[17px] leading-[18px] px-8 border-l-[3px] hover:border-primary block border-bodyBg"
											>
												{name}
											</NavLink>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default SidebarSingleItem;
