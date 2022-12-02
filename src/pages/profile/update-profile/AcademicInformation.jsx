import React from "react";
import ProfileLayout from "../components/ProfileLayout";
import Input from "./components/Input";
import NextButton from "./components/NextButton";
import Title from "./components/Title";

const AcademicInformation = () => {
	return (
		<ProfileLayout>
			<div>
				<Title title="Academic Information" />
				{/* Update Profile Card */}
				<div className="border border-borderColor rounded-[20px] p-4 sm:p-9 bg-sectionBg mb-6">
					<div className="flex flex-wrap gap-[30px] lg:gap-x-[83px]">
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="institution name"
								defaultValue="Daffodil International University"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="Program"
								defaultValue="Undergraduate"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="subject"
								defaultValue="Software Engineering"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="passing year"
								defaultValue="2022"
								type="text"
								input
							/>
						</div>
					</div>
				</div>
				<NextButton
					text="Save and Next"
					link="/profile/update-profile/certification-skill"
				/>
			</div>
		</ProfileLayout>
	);
};

export default AcademicInformation;
