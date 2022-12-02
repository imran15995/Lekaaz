import React from "react";
import ProfileLayout from "../components/ProfileLayout";
import ButtonWithIcon from "./components/ButtonWithIcon";
import Input from "./components/Input";
import NextButton from "./components/NextButton";
import SkillInput from "./components/SkillInput";
import Title from "./components/Title";

const CertificationAndSkills = () => {
	return (
		<ProfileLayout>
			<div>
				<Title title="Certification & Skills" />
				{/* Update Profile Card */}
				{/* Skills */}
				<div className="mb-12">
					<div className="border border-borderColor rounded-[20px] p-4 sm:p-9 bg-sectionBg mb-6">
						<div className="flex flex-wrap gap-[30px] lg:gap-x-[83px]">
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="Certificate or award"
									defaultValue="Software Architecture"
									type="text"
									input
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="Certified from"
									defaultValue="Coursera"
									type="text"
									input
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input label="year" defaultValue="2020" type="number" input />
							</div>
						</div>
					</div>
					<div className="border border-borderColor rounded-[20px] p-4 sm:p-9 bg-sectionBg mb-6">
						<div className="flex flex-wrap gap-[30px] lg:gap-x-[83px]">
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="Certificate or award"
									defaultValue="Graphics Design"
									type="text"
									input
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="Certified from"
									defaultValue="ICT Ministry"
									type="text"
									input
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input label="year" defaultValue="2020" type="number" input />
							</div>
						</div>
					</div>
					<div className="mb-6">
						<ButtonWithIcon button text="add certificate" />
					</div>
				</div>
				<div className="border border-borderColor rounded-[20px] p-4 sm:p-9 bg-sectionBg mb-6">
					<label
						className={`font-light text-primary text-[18px] leading-[18px] uppercase mb-[7px] block`}
					>
						Skills
					</label>
					<div className="flex flex-wrap gap-[30px] xl:gap-x-[45px]">
						<SkillInput oldValue="UI UX Design" />
						<SkillInput oldValue="Graphics Design" />
						<SkillInput oldValue="Web Design" />
						<SkillInput oldValue="Web Development" />
					</div>
				</div>
				<div className="mb-6">
					<ButtonWithIcon button text="add skills" />
				</div>
				<NextButton
					text="Submit for Varification"
					link="/profile/detailed-overview"
				/>
			</div>
		</ProfileLayout>
	);
};

export default CertificationAndSkills;
