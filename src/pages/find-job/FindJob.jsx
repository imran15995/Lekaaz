import React from "react";
import { Link } from "react-router-dom";
import data from "./data/data";
import CalendarIcon from "./icon/CalendarIcon";
import FindIcon from "./icon/FindIcon";

const FindJobItem = ({ title, price, date, text, id }) => {
	return (
		<>
			<div className="md:px-2 mb-12">
				<h5 className="text-normal md:text-[25px] md:leading-[25px]">
					<Link className="text-white decoration-upHeading" to={`#${id}`}>
						{title}
					</Link>
					<span className="border border-borderColor rounded-md pt-[6px] pb-[2px] px-2 bg-[#0B2C43] text-[18px] font-normal ml-2">
						{price}
					</span>
				</h5>
				<div className="text-primary mb-[6px] mt-[9px] text-[16px] flex items-center">
					<CalendarIcon />
					<span className="pl-3 translate-y-[2px]">{date}</span>
				</div>
				<div className="text-[#7C8083] sm:text-[18px] sm:leading-[18px] font-light">
					{text}{" "}
					<Link
						className="text-primary"
						style={{ textDecoration: "underline" }}
						to={`#${id}`}
					>
						View Details.
					</Link>
				</div>
			</div>
		</>
	);
};

const FindJob = () => {
	return (
		<section className="pt-11 pb-16">
			<div className="container">
				<div className="flex justify-center mb-10">
					<FindIcon />
				</div>
				<h2 className="text-center mb-10 text-base md:text-2xl">
					Find Job
				</h2>
				<div className="py-7 sm:py-8 px-7 sm:px-9 bg-sectionBg rounded-[20px] border border-borderColor sm:text-normal sm:font-normal">
					{data.map((item, i) => (
						<FindJobItem {...item} key={i} />
					))}
					<div className="text-center pt-4">
						<Link
							to="#0"
							className="text-uppercase inline-flex items-center justify-center group"
						>
							<span className="mr-2 translate-y-[3px] text-[18px] text-primary uppercase">
								View All
							</span>
							<svg width="30" viewBox="0 0 30 30" fill="none">
								<circle
									cx="15"
									cy="15"
									r="15"
									className="fill-primary group-hover:fill-white duration-300"
								/>
								<path
									d="M11.0869 19.4138L15.9241 14.6742L11.0869 9.93449L12.5761 8.47852L18.913 14.6742L12.5761 20.8698L11.0869 19.4138Z"
									fill="#010D15"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export { FindJobItem };
export default FindJob;
