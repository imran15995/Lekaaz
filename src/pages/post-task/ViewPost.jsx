import React from "react";
import { Link } from "react-router-dom";
import { FindJobItem } from "../find-job/FindJob";
import TaskLayout from "./components/TaskLayout";
import data from "./data/data";
const ViewPost = () => {
	return (
		<TaskLayout>
			<div className="bg-bodyBg rounded-[16px] border border-borderColor xl:mb-[25px] flex flex-col">
				<div className="pt-[16px] pb-3 px-4">
					<h4 className="text-[18px] text-center md:font-medium capitalize font-light">
						View Post
					</h4>
				</div>
				<div className="bg-sectionBg rounded-[16px] border-t border-borderColor px-4 py-6 sm:px-[22px] sm:pt-[40px] sm:pb-[15px] flex-grow">
					{data.map((item, i) => (
						<FindJobItem {...item} key={i} />
					))}
					<div className="text-center pt-4 w-full mt-[-20px] pb-4">
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
		</TaskLayout>
	);
};

export default ViewPost;
