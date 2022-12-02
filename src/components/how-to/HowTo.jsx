import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import HowIcon from "./icons/HowIcon";
import HowToRocketIcon from "./icons/HowToRocketIcon";
import HowToImage from "./img/HowToImage";
const HowTo = () => {
	return (
		<div className="mb-5">
			<div className="container">
				<SectionHeader
					icon={<HowIcon />}
					title="How Lekaaz Works?"
					text="The working process of Lekaaz is very simple. If you have any working skill then you are allowed to work here."
				/>
				<div className="py-12 px-4 md:px-8 md:py-[76px] rounded-[20px] border border-borderColor flex flex-wrap sm:flex-nowrap items-center">
					<div className="w-full sm:max-w-[200px] lg:max-w-[320px] text-center mb-10 sm:mb-0">
						<div className="sm:mb-6 flex justify-center">
							<HowToRocketIcon />
						</div>
						<div className="mb-4 lg:mb-[30px]">
							<h2 className="text-base sm:text-lg xl:text-2xl text-center">
								Start Your Journey
							</h2>
						</div>
						<Link className="btn btn-sm pt-[8px] pb-[6px]" to="#0">
							Join On Lekaaz
						</Link>
					</div>
					<HowToImage />
				</div>
			</div>
		</div>
	);
};

export default HowTo;
