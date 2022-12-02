import React from "react";
import ProfileInfo from "./components/ProfileInfo";
import Title from "./update-profile/components/Title";

const ProfileEarning = () => {
	return (
		<>
			<div className="container py-14">
				<Title title="Earnings" />
				<div className="pt-3">
					<div className="py-7 md:py-9 px-5 md:px-6 rounded-3xl border border-borderColor flex flex-wrap gap-10 bg-sectionBg">
						<ProfileInfo index="earning-info" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileEarning;
