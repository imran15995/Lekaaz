import React from "react";
import useAuth from "../../hooks/useAuth";
import ProfileInfo from "./components/ProfileInfo";
import ProfileLayout from "./components/ProfileLayout";

const DetailedOverview = () => {
	const { user } = useAuth()
	return (
		<ProfileLayout>
			<div className="py-7 md:py-9 px-5 md:px-6 rounded-3xl border border-borderColor flex flex-wrap gap-10 bg-sectionBg">
				<ProfileInfo index="general-info" />
				<div className="w-full flex flex-wrap gap-x-7 gap-y-9 whitespace-normal break-words">
					{/* Personal Information */}
					<div className="w-full md:w-[calc(50%-14px)]">
						<h4 className="text-sm sm:text-normal font-light text-primary mb-3 sm:mb-8 uppercase">
							personal information
						</h4>
						<ul className="sm:text-sm font-light leading-[18px]">
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									date of birth
								</span>
								<span className="w-0 flex-grow">16/11/1998</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									gender
								</span>
								<span className="w-0 flex-grow">Male</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									blood group
								</span>
								<span className="w-0 flex-grow">B+</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									nationality
								</span>
								<span className="w-0 flex-grow">Bangladeshi</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									National Id
								</span>
								<span className="w-0 flex-grow">2404904175</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									facebook
								</span>
								<span className="w-0 flex-grow">
									facebook.com/ihosen15995
								</span>
							</li>
							<li className="flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									twitter
								</span>
								<span className="w-0 flex-grow">
									twitter.com/ihosen15995
								</span>
							</li>
						</ul>
					</div>
					{/* Contact Information */}
					<div className="w-full md:w-[calc(50%-14px)]">
						<h4 className="text-sm sm:text-normal font-light text-primary mb-3 sm:mb-8 uppercase">
							contact information
						</h4>
						<ul className="sm:text-sm font-light leading-[18px]">
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									mobile
								</span>
								<span className="w-0 flex-grow">01862537456</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									Email
								</span>
								<span className="w-0 flex-grow">
									{user.email}
								</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									country
								</span>
								<span className="w-0 flex-grow">Bangladesh</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									country
								</span>
								<span className="w-0 flex-grow">Dhaka</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									zip code
								</span>
								<span className="w-0 flex-grow">1612</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									area
								</span>
								<span className="w-0 flex-grow">Section 2, Mirpur</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									police station
								</span>
								<span className="w-0 flex-grow">Mirpur</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									Road / street
								</span>
								<span className="w-0 flex-grow">Road 3, Block Cha</span>
							</li>
						</ul>
					</div>
					{/* Academic Information */}
					<div className="w-full md:w-[calc(50%-14px)]">
						<h4 className="text-sm sm:text-normal font-light text-primary mb-3 sm:mb-8 uppercase">
							Academic information
						</h4>
						<ul className="sm:text-sm font-light leading-[18px]">
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									institutin
								</span>
								<span className="w-0 flex-grow">
									Daffodil International University
								</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									program
								</span>
								<span className="w-0 flex-grow">Undergraduation</span>
							</li>
							<li className="mb-[14px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-[110px] sm:w-[148px] uppercase">
									subject
								</span>
								<span className="w-0 flex-grow">
									Software Engineering
								</span>
							</li>
						</ul>
					</div>
					{/* Certification Information */}
					<div className="w-full md:w-[calc(50%-14px)]">
						<h4 className="text-sm sm:text-normal font-light text-primary mb-3 sm:mb-8 uppercase">
							Certification
						</h4>
						<ul className="font-light leading-[18px]">
							<li className="mb-[14px] text-sm xl:text-[22px] font-light leading-[18px] xl:leading-[24px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-0 flex-grow max-w-[343px]">
									Software Architecture from Courseta at 2020
								</span>
							</li>
							<li className="mb-[14px] text-sm xl:text-[22px] font-light leading-[18px] xl:leading-[24px] flex gap-x-4 md:gap-x-[30px]">
								<span className="w-0 flex-grow max-w-[343px]">
									Graphics Design from ICT Ministry at 2020
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</ProfileLayout>
	);
};

export default DetailedOverview;
