import React from "react";
// import BannerImage from "./img/BannerImage";
import banner from "./img/banner.svg";

const Banner = () => {
	return (
		<section className="pt-20 md:pt-[93px] pb-20 md:pb-[104px]">
			<div className="container">
				<div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-10">
					<div className="w-full md:max-w-[350px] lg:max-w-[547px]">
						<h1 className="mb-8 md:mb-4 lg:mb-8 md:text-[34px] md:leading-[42px] lg:text-[48px] lg:leading-[56px]">
							Find your assistant by few clicks
						</h1>
						<p className="lg:text-normal font-normal">
							Lekaaz will help you to find experts as well as work
							opportunity in online and offline
						</p>
						<div className="flex flex-wrap gap-5 mt-6">
							<a
								href="#0"
								className="btn flex-grow sm:flex-grow-0 md:text-[16px] lg:text-[22px] md:py-[6px] lg:py-[10px]"
							>
								Hire an assistant
							</a>
							<a
								href="#0"
								className="btn-outline flex-grow sm:flex-grow-0 md:text-[16px] lg:text-[22px] md:py-[6px] lg:py-[10px]"
							>
								Join as an assistant
							</a>
						</div>
					</div>
					<div className="w-full md:w-auto md:flex-grow max-w-[495px]">
						<img
							src={banner}
							className="duration-300 hover:scale-105"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
