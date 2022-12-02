import React from "react";
import demoUserImg from "../../../components/header/icons/user.svg";
import useAuth from "../../../hooks/useAuth";
import EnvelopIcon from "./../icons/EnvelopIcon";
import FacebookIcon from "./../icons/FacebookIcon";
import PhoneIcon from "./../icons/PhoneIcon";
import VerifiedIcon from "./../icons/VerifiedIcon";

import { Link } from "react-router-dom";
import ViewAllButton from "./ViewAllButton";

const working__area = [
	{
		name: "UI UX Design",
		link: "#",
	},
	{
		name: "Graphic Design",
		link: "#",
	},
	{
		name: "Web Design",
		link: "#",
	},
	{
		name: "Web Development",
		link: "#",
	},
];

const ProfileInfo = ({ index }) => {
	const { user } = useAuth();
	return (
		<>
			<div className="w-full sm:max-w-[210px]">
				<img
					src={user.photoURL || demoUserImg}
					className="w-full aspect-square rounded-full object-cover max-w-[130px] xl:max-w-[245px]"
					alt=""
				/>
				<ul className="md:text-[17px] mt-5 md:mt-9 lg:ml-4">
					<li className="flex mb-2">
						<span className="mt-[3px] w-5">
							<VerifiedIcon />
						</span>
						<span className="w-0 flex-grow pl-2">Identity Verified</span>
					</li>
					<li className="flex mb-2">
						<span className="mt-[3px] w-5">
							<PhoneIcon />
						</span>
						<span className="w-0 flex-grow pl-2">Phone Verivied</span>
					</li>
					<li className="flex mb-2">
						<span className="mt-[3px] w-5">
							<EnvelopIcon />
						</span>
						<span className="w-0 flex-grow pl-2">Email Verivied</span>
					</li>
					<li className="flex mb-2">
						<span className="mt-[3px] w-5">
							<FacebookIcon />
						</span>
						<span className="w-0 flex-grow pl-2">Facebook Connected</span>
					</li>
				</ul>
			</div>
			<div className="w-full sm:w-0 flex-grow">
				{user && user.displayName && (
					<h3 className="text-[20px] md:text-[25px]">
						{user.displayName}
					</h3>
				)}
				<span className="font-light text-primary">WEB DESIGNER</span>
				<div className="flex items-center font-light text-primary mt-2">
					<svg width="79" viewBox="0 0 79 15" fill="none">
						<path
							d="M71.5 3.84375V9.69375L73.8625 11.1375L73.2437 8.4375L75.325 6.6375L72.5875 6.39375L71.5 3.84375ZM66.8687 14.25L68.0875 8.98125L64 5.4375L69.4 4.96875L71.5 0L73.6 4.96875L79 5.4375L74.9125 8.98125L76.1312 14.25L71.5 11.4562L66.8687 14.25Z"
							fill="#3FC48B"
						/>
						<path
							d="M2.86875 14.25L4.0875 8.98125L0 5.4375L5.4 4.96875L7.5 0L9.6 4.96875L15 5.4375L10.9125 8.98125L12.1312 14.25L7.5 11.4562L2.86875 14.25Z"
							fill="#3FC48B"
						/>
						<path
							d="M18.8687 14.25L20.0875 8.98125L16 5.4375L21.4 4.96875L23.5 0L25.6 4.96875L31 5.4375L26.9125 8.98125L28.1312 14.25L23.5 11.4562L18.8687 14.25Z"
							fill="#3FC48B"
						/>
						<path
							d="M34.8687 14.25L36.0875 8.98125L32 5.4375L37.4 4.96875L39.5 0L41.6 4.96875L47 5.4375L42.9125 8.98125L44.1312 14.25L39.5 11.4562L34.8687 14.25Z"
							fill="#3FC48B"
						/>
						<path
							d="M50.8687 14.25L52.0875 8.98125L48 5.4375L53.4 4.96875L55.5 0L57.6 4.96875L63 5.4375L58.9125 8.98125L60.1312 14.25L55.5 11.4562L50.8687 14.25Z"
							fill="#3FC48B"
						/>
					</svg>
					<span className="ml-2 mt-1">4.5(7 reviews)</span>
				</div>
				<div className="my-6 md:my-9 xl:mb-16 font-light leading-4">
					I'm really passionate about UI UX and web design by using latest
					technologies. It helps me to provide best satisfaction to the
					client. In this creative field, I'm working for 3 years. I have
					done a lot of projects yet. As well as, I'm extremely expert in
					the field of Graphic Design that will add extra advantage to
					visualise the concept of a project. I have completed my
					undergraduate degree in Software Engineering that wilI help me to
					reflect my knowledge in real life project.
				</div>
				<h4 className="text-[20px] sm:text-[25px] leading-[1] text-primary font-normal mb-4">
					Working Area
				</h4>
				{index === "general-info" && (
					<ul className="flex gap-x-7 gap-y-2 flex-wrap">
						{working__area.map(({ name, link }, i) => (
							<li key={i}>
								<Link
									to={link}
									className="rounded-full border border-borderColor pt-3 pb-2 px-3 inline-block font-light xl:font-normal text-[14px] xl:text-[17px] xl:leading-[18px] bg-bodyBg"
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				)}
				{index === "earning-info" && (
					<div className="inline-block">
						<div className="inline-flex border flex-wrap border-borderColor justify-center">
							<div className="w-1/2 md:w-1/3 xl:w-auto pt-[10px] pb-[9px] pl-[11px] text-center group">
								<div className="pr-[11px] sm:border-r border-borderColor group-last:border-r-0">
									<h5 className="text-primary text-[20px] lg:text-[25px] lg:leading-[25px] lg:text-medium">
										09
									</h5>
									<div className="font-light md:text-[18px] lg:font-medium leading-[18px] mt-[5px]">
										Total Work
									</div>
								</div>
							</div>
							<div className="w-1/2 md:w-1/3 xl:w-auto pt-[10px] pb-[9px] pl-[11px] text-center group">
								<div className="pr-[11px] sm:border-r border-borderColor group-last:border-r-0">
									<h5 className="text-primary text-[20px] lg:text-[25px] lg:leading-[25px] lg:text-medium">
										$4000+
									</h5>
									<div className="font-light md:text-[18px] lg:font-medium leading-[18px] mt-[5px]">
										Total Earning
									</div>
								</div>
							</div>
							<div className="w-1/2 md:w-1/3 xl:w-auto pt-[10px] pb-[9px] pl-[11px] text-center group">
								<div className="pr-[11px] sm:border-r border-borderColor group-last:border-r-0">
									<h5 className="text-primary text-[20px] lg:text-[25px] lg:leading-[25px] lg:text-medium">
										$1500
									</h5>
									<div className="font-light md:text-[18px] lg:font-medium leading-[18px] mt-[5px]">
										Current Balance
									</div>
								</div>
							</div>
							<div className="w-1/2 md:w-1/3 xl:w-auto pt-[10px] pb-[9px] pl-[11px] text-center group">
								<div className="pr-[11px] sm:border-r border-borderColor group-last:border-r-0">
									<h5 className="text-primary text-[20px] lg:text-[25px] lg:leading-[25px] lg:text-medium">
										$2500
									</h5>
									<div className="font-light md:text-[18px] lg:font-medium leading-[18px] mt-[5px]">
										Total Withdrawn
									</div>
								</div>
							</div>
							<div className="w-1/2 md:w-1/3 xl:w-auto pt-[10px] pb-[9px] pl-[11px] text-center group">
								<div className="pr-[11px] sm:border-r border-borderColor group-last:border-r-0">
									<h5 className="text-primary text-[20px] lg:text-[25px] lg:leading-[25px] lg:text-medium">
										$1500
									</h5>
									<div className="font-light md:text-[18px] lg:font-medium leading-[18px] mt-[5px]">
										Available for Withdrawn
									</div>
								</div>
							</div>
						</div>
						<div className="justify-end flex items-center mt-[14px]">
							<ViewAllButton text="view details" link="#0" />
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default ProfileInfo;
