import React from "react";
import ProfileLayout from "./components/ProfileLayout";

import ProfileInfo from "./components/ProfileInfo";

const Profile = () => {
	return (
		<>
			<ProfileLayout>
				<div className="py-7 md:py-9 px-5 md:px-6 rounded-3xl border border-borderColor flex flex-wrap gap-10 bg-sectionBg">
					<ProfileInfo index="general-info" />
				</div>
			</ProfileLayout>
		</>
	);
};

export default Profile;
