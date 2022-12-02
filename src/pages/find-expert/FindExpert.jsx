import React from "react";
import { Link } from "react-router-dom";
import data from "./data/data";
import ExpertIcon from "./icon/ExpertIcon";
import FullStar from "./icon/FullStar";
import HalfStar from "./icon/HalfStar";

const FindExpertItem = ({
	img,
	name,
	designation,
	avg_rating,
	reviews,
	tags,
	id,
}) => {
	return (
		<>
			<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%/3)-16px)] xl:w-[calc((100%/3)-calc(80px/3))] border border-borderColor rounded-[20px] bg-sectionBg lg:px-4 px-2 xl:px-7 py-[22px] pb-[32px] text-center duration-300 hover:scale-105">
				<img
					src={img}
					className="w-[71px] aspect-square object-cover mb-4 mx-auto border border-primary rounded-full"
					alt=""
				/>
				<h5 className="text-normal font-medium xl:text-[25px] xl:leading-[25px] mb-[7px]">
					<Link to={`/find-expert/${id}`}>{name}</Link>
				</h5>
				<span className="font-light text-[16px] uppercase opacity-80 mb-4 block">
					{designation}
				</span>
				<div className="flex justify-center font-light mb-11">
					{avg_rating <= 0.5 ? <HalfStar /> : <FullStar />}
					{avg_rating <= 1.5 ? <HalfStar /> : <FullStar />}
					{avg_rating <= 2.5 ? <HalfStar /> : <FullStar />}
					{avg_rating <= 3.5 ? <HalfStar /> : <FullStar />}
					{avg_rating <= 4.5 ? <HalfStar /> : <FullStar />}
					{avg_rating} ( {reviews} reviews )
				</div>
				<div className="flex flex-wrap gap-[15px] justify-center">
					{tags.map(({ tag, link }, i) => (
						<Link
							className="bg-[#0B2C43] border border-borderColor leading-4 text-[16px] px-[11px] pt-[5px] pb-[4px] rounded-full  font-light"
							to={link}
							key={i}
						>
							{tag}
						</Link>
					))}
				</div>
				<div className="mt-4">
					<Link
						to={`/find-expert/${id}`}
						className="btn btn-sm font-light text-[16px] px-[11px] pt-[5px] pb-[4px]"
					>
						View Details
					</Link>
				</div>
			</div>
		</>
	);
};

const FindExpert = () => {
	return (
		<section className="pt-11 pb-16">
			<div className="container">
				<div className="flex justify-center mb-10">
					<ExpertIcon />
				</div>
				<h2 className="text-center mb-10 text-base md:text-2xl">
					Find Expert
				</h2>
				<div className="sm:p-4 xl:py-[35px] xl:px-[35px] rounded-[20px] sm:border border-borderColor">
					<div className="flex flex-wrap gap-6 xl:gap-10">
						{data.map((item, i) => (
							<FindExpertItem {...item} key={i} />
						))}
					</div>
					<div className="text-center pt-10 pb-2">
						<Link
							to="#0"
							className="text-uppercase inline-flex items-center justify-center"
						>
							<span className="mr-2 translate-y-[3px] text-[18px] text-primary uppercase">
								View All
							</span>
							<svg
								width="30"
								viewBox="0 0 30 30"
								fill="none"
								className="group"
							>
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

export default FindExpert;
