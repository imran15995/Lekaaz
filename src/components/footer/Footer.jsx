import React from "react";
import { Link } from "react-router-dom";
import Logo from "../header/components/Logo";
import Facebook from "./icon/Facebook";
import Linkedin from "./icon/Linkedin";
import Twitter from "./icon/Twitter";
const Footer = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<footer className="bg-sectionBg border-t border-borderColor">
			{/* Footer Top */}
			<div className="container">
				<div className="flex flex-wrap justify-between pb-[38px] pt-[70px] gap-8 lg:gap-16 border-b border-borderColor">
					<div className="w-full md:max-w-[345px] xl:max-w-[435px]">
						<div className="mb-6 xl:mb-10">
							<Logo />
						</div>
						<div className="mb-6 xl:mb-8 xl:text-normal font-medium">
							Interested To Work With Us
						</div>
						<form onSubmit={handleSubmit}>
							<div className="flex">
								<input
									type="text"
									placeholder="Enter your email address"
									className="h-12 xl:h-16 flex-grow border border-[#ffffff20] shadow-none outline-none bg-bodyBg px-6 rounded-l-full placeholder:text-[#2A465A] xl:placeholder:font-normal xl:placeholder:text-normal pt-1"
								/>
								<button
									type="submit"
									className="bg-primary text-bodyBg rounded-r-full xl:text-normal xl:font-normal pl-4 pr-[18px] pt-1 m-[1px] ml-0"
								>
									Send
								</button>
							</div>
						</form>
					</div>
					<div className="flex flex-wrap sm:flex-nowrap w-full md:w-0 flex-grow gap-6">
						<div className="w-full sm:w-1/3">
							<h3 className="text-normal xl:text-[25px] font-semibold mb-4 lg:mb-[25px]">
								Company
							</h3>
							<ul>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="#"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="#"
									>
										Portfolio
									</Link>
								</li>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="#"
									>
										Page
									</Link>
								</li>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="#"
									>
										FAQ
									</Link>
								</li>
							</ul>
						</div>
						<div className="w-full sm:w-1/3">
							<h3 className="text-normal xl:text-[25px] font-semibold mb-4 lg:mb-[25px]">
								Support
							</h3>
							<ul>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="#"
									>
										Contact Us
									</Link>
								</li>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="#"
									>
										Privacy policy
									</Link>
								</li>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="#"
									>
										Term of use
									</Link>
								</li>
							</ul>
						</div>
						<div className="w-full sm:w-1/3">
							<h3 className="text-normal xl:text-[25px] font-semibold mb-4 lg:mb-[25px]">
								Contact
							</h3>
							<ul>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="#"
									>
										Section 2, Mirpur, Dhaka-1216
									</Link>
								</li>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="Tel:01862537456"
									>
										01862537456
									</Link>
								</li>
								<li>
									<Link
										className="font-light leading-4 mb-[15px] block"
										to="Mailto:lekaaz@gmail.com"
									>
										Email: lekaaz@gmail.com
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="py-7">
					<div className="flex flex-wrap justify-evenly lg:justify-between items-center gap-6">
						<ul className="flex flex-wrap justify-center font-light md:text-[18px] gap-7 w-full lg:w-auto">
							<li>
								<Link to="#">Terms of Service</Link>
							</li>
							<li>
								<Link to="#">Privacy Policy</Link>
							</li>
							<li>
								<Link to="#">Security</Link>
							</li>
						</ul>
						<ul className="flex gap-4 xl:gap-7 justify-center w-full lg:w-auto">
							<li>
								<Link to="#">
									<Facebook />
								</Link>
							</li>
							<li>
								<Link to="#">
									<Twitter />
								</Link>
							</li>
							<li>
								<Link to="#">
									<Linkedin />
								</Link>
							</li>
						</ul>
						<div className="w-full lg:w-auto text-center">
							&copy; 2022{" "}
							<Link className="text-primary" to="#">
								Lekaaz
							</Link>{" "}
							All rights reserved.
						</div>
					</div>
				</div>
			</div>
			{/* Footer Top */}
		</footer>
	);
};

export default Footer;
