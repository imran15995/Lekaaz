import React from "react";
import ProfileLayout from "../components/ProfileLayout";
import Input from "./components/Input";
import NextButton from "./components/NextButton";
import Title from "./components/Title";

const ContactInformation = () => {
	return (
		<ProfileLayout>
			<div>
				<Title title="Contact Information" />
				{/* Update Profile Card */}
				<div className="border border-borderColor rounded-[20px] p-4 sm:p-9 bg-sectionBg mb-6">
					<div className="flex flex-wrap gap-[30px] lg:gap-x-[83px]">
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="Mobile no"
								defaultValue="01862537456"
								type="number"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="email"
								defaultValue="imran35-2307@diu.edu.bd"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="country"
								defaultValue="Bangladesh"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input label="district" defaultValue="Dhaka" type="text" input />
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input label="zip code" defaultValue="1216" type="text" input />
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="area"
								defaultValue="Section2, Mirpur"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="police station"
								defaultValue="Mirpur"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
							<Input
								label="road / street"
								defaultValue="Road 3, Block Cha"
								type="text"
								input
							/>
						</div>
					</div>
				</div>
				<NextButton
					text="Save and Next"
					link="/profile/update-profile/academic-info"
				/>
			</div>
		</ProfileLayout>
	);
};

export default ContactInformation;
