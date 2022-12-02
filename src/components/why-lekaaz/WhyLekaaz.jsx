import React from "react";
import SectionHeader from "../SectionHeader";
import data from "./data/data";
import LekaazImage from "./LekaazImage";

const WhyLekaaz = () => {
	return (
		<>
			<div className="mb-5 py-[65px]">
				<div className="container">
					<SectionHeader
						icon={<LekaazImage />}
						title="Why you should try Lekaaz?"
						text="We are giving you the best opportunities for making life easier
					with this digital platform. We have some exclusive features."
					/>
					<div className="bg-sectionBg rounded-[27px] border border-borderColor p-4 lg:p-[34px]">
						<div className="overflow-hidden">
							<div className="mb-[-1px] mx-[-2px]">
								<div className="flex flex-wrap text-center">
									{data.map(({ img, name, text }, i) => (
										<div
											className="border-r border-b border-borderColor p-5 w-full sm:w-1/2 lg:w-1/3 group"
											key={i}
										>
											<div>
												<img
													src={img}
													className="mx-auto group-hover:scale-110 duration-300"
													alt=""
												/>
												<h4 className="text-[20px] xl:text-[25px]  my-[11px] font-semibold">
													{name}
												</h4>
												<div className="font-light lg:text-[18px] max-w-[261px] mx-auto leading-[18px]">
													{text}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyLekaaz;
