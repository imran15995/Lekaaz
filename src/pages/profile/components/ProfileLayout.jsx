import React from "react";
import { NavLink } from "react-router-dom";
const ProfileLayout = ({ children }) => {
	return (
		<div className="container">
			<div className="flex flex-wrap gap-7 py-12 sm:pt-[67px] sm:pb-[58px]">
				<div className="w-full lg:max-w-[245px]">
					<div className="bg-sectionBg rounded-[23px] border border-borderColor px-6 pt-6 pb-2">
						<ul className="text-[18px] profile-menu">
							<li>
								<NavLink
									className="inline-flex items-center rounded-full ml-1 mb-2"
									to="/profile/general-overview"
								>
									<span>General Overview</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									className="inline-flex items-center rounded-full ml-1 mb-2"
									to="/profile/detailed-overview"
								>
									<span>Detailed Overview</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									className="inline-flex items-center rounded-full ml-1 mb-2"
									to="/profile/update-profile"
								>
									<span>Update Profile</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<article className="w-full lg:w-0 flex-grow">{children}</article>
			</div>
		</div>
	);
};

export default ProfileLayout;
