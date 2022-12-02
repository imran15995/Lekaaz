import React from "react";
import { Link } from "react-router-dom";
import CalendarIcon from "../find-job/icon/CalendarIcon";
import ViewAllButton from "./components/ViewAllButton";
import Title from "./update-profile/components/Title";
const data = [
	{
		id: `1`,
		title: `Loan Eligibility Prediction`,
		text: `In this Project the user can determine if he could be eligible for the loan. and if not then the lower amount that could be sanctioned accordingly.`,
	},
	{
		id: `2`,
		title: `Landing Page creation`,
		text: `Hi, we're looking professional web designer to design a landing page for us, we're looking to create a simpler version of vouchercart.com`,
	},
	{
		id: `3`,
		title: `Build Hubspot website`,
		text: `Build the full website on hubspot from Figma design. The website must have nice CSS transition animations on parts of the pages.`,
	},
	{
		id: `4`,
		title: `Health Care Application`,
		text: `There are several modules in Health care application. One of them is Home health care. We have clear requirement with prototype.`,
	},
	{
		id: `5`,
		title: `Invoice Web Application`,
		text: `Invoice web application for a small textile business that should serve the following purpose. - Create a printable invoice upon data entry.`,
	},
];

const data_2 = [
	{
		id: `1`,
		name: "To do",
		title: `Vet Chat Website`,
		date: "16 Nov 2022 - 28 Feb 2023",
		price: "$900",
		text: `Its service help to connect pet owners with vet through chat, pet owners can book a date and time and then pay the fees.`,
	},
	{
		id: `2`,
		name: "in progress",
		title: `Prioritization WebApp UI`,
		date: "07 Oct 2022 - 05 Dec 2022",
		price: "$500",
		text: `You will design a visually pleasing, and easy-to-use UI/UX for a list prioritization web app. It will help with prioritizing things`,
	},
	{
		id: `3`,
		name: "completed",
		title: `Video sharing application`,
		date: "07 May 2022 - 08 Aug 2023",
		price: "$800",
		text: `The application is an online video sharing platform that focuses on providing customised videos to users.`,
	},
	{
		id: `4`,
		name: "canceled",
		title: `online bidder for project`,
		date: "17 Nov 2022 - 15 Jan 2023",
		price: "$400",
		text: `Please read the project title properly and then apply. We are looking for longtime operation. It should not be very hardcore work.`,
	},
];

const WorkHistory = () => {
	return (
		<>
			<div className="container py-14">
				<Title title="work list" />
				<div className="pt-3">
					<div className="flex flex-wrap gap-[30px] xl:gap-[46px]">
						<div className="w-full lg:w-[575px] flex-grow flex flex-wrap gap-[20px] sm:gap-[30px]">
							{data_2 &&
								data_2.map((item, i) => <WorkItem {...item} key={i} />)}
						</div>
						<div className="w-full md:max-w-[376px] mx-auto lg:mx-0">
							<div className="bg-bodyBg rounded-[16px] border border-borderColor mb-[25px]">
								<div className="flex pt-[16px] pb-3 px-4">
									<h4 className="text-[18px] text-primary md:font-medium uppercase font-light">
										work request
									</h4>
								</div>
								<div className="bg-sectionBg rounded-[16px] border-t border-borderColor px-4 py-6 sm:px-[22px] sm:py-[25px]">
									<div className="text-[18px] font-light">
										{data &&
											data.map((item, i) => (
												<WorkRequestItem {...item} key={i} />
											))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const WorkRequestItem = ({ title, id, text }) => {
	return (
		<>
			<div className="text-[#7C8083] sm:text-[18px] leading-[18px] group">
				<div className=" group-last:mb-0 mb-[23px]">
					<h5 className="text-normal md:text-[25px] md:leading-[25px] mb-[13px]">
						<Link className="text-white" to={`find-task/${id}`}>
							{title}
						</Link>
					</h5>
					<div>
						{text}
						<Link
							className="text-primary"
							style={{ textDecoration: "underline" }}
							to={`find-task/${id}`}
						>
							View Details
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
const WorkItem = ({ name, title, id, text, price, date }) => {
	return (
		<>
			<div className="bg-bodyBg rounded-[16px] border border-borderColor xl:mb-[25px] w-full md:w-[calc(50%-15px)] flex flex-col">
				<div className="flex pt-[16px] pb-3 px-4">
					<h4 className="text-[18px] text-primary md:font-medium uppercase font-light">
						{name}
					</h4>
				</div>
				<div className="bg-sectionBg rounded-[16px] border-t border-borderColor px-4 py-6 sm:px-[22px] sm:pt-[20px] sm:pb-[15px] flex-grow">
					<div className="text-[18px] font-light">
						<div className="text-[#7C8083] sm:text-[18px] leading-[18px] group">
							<div className=" group-last:mb-0 mb-[23px]">
								<h5 className="text-normal md:text-[25px] md:leading-[25px] mb-[13px]">
									<Link className="text-white" to={`find-task/${id}`}>
										{title}
									</Link>
								</h5>
								<div>{text}</div>
								<div className="text-primary mb-[6px] text-[16px] flex items-center mt-[13px]">
									<CalendarIcon />
									<span className="pl-3 translate-y-[2px]">
										{date}
									</span>
								</div>
								<div className="bg-[#0B2C43] border border-borderColor leading-4 text-[18px] px-[11px] pt-[15px] pb-[14px] rounded-[10px]  md:text-[25px] font-medium text-white text-center mb-[21px] mt-[19px]">
									{price}
								</div>
								<div className="flex justify-end">
									<ViewAllButton
										link={`find-task/${id}`}
										text="view all"
										className="font-regular"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WorkHistory;
