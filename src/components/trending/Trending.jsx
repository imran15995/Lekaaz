import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import data from "./data/data";
import TrendingIcon from "./icons/TrendingIcon";

const TrendingCard = ({ img, name, link }) => {
	return (
		<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-[10px]">
			<Link
				to={link}
				className="block bg-sectionBg border border-borderColor rounded-[20px] group hover:bg-primary"
			>
				<div className="rounded-[20px] overflow-hidden m-[10px] mb-0">
					<img
						src={img}
						className="w-full duration-300 group-hover:scale-110"
						alt=""
					/>
				</div>
				<div className="xl:text-normal py-4 font-normal uppercase text-center tracking-tighter group-hover:text-bodyBg duration-300">
					{name}
				</div>
			</Link>
		</div>
	);
};

const Trending = () => {
	return (
		<div className="mb-5 pt-[65px]">
			<div className="container">
				<SectionHeader
					icon={<TrendingIcon />}
					title="Trending"
					text="This following categories are most popular services in Lekaaz."
				/>
				<div className="m-[-10px]">
					<div className="flex flex-wrap justify-center">
						{data &&
							data.map((item, i) => <TrendingCard key={i} {...item} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trending;
