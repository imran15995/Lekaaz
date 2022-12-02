import React from "react";
import { Link } from "react-router-dom";
import apple from "./img/apple.svg";
import google from "./img/google.svg";

const AppBar = () => {
	return (
		<div className="pt-[20px] pb-[19px] border-t  border-borderColor bg-bodyBg">
			<div className="container">
				<div className="flex justify-evenly lg:justify-between flex-wrap items-center gap-5 text-center lg:text-left">
					<h4 className="text-normal font-medium m-0 pt-1">
						TO GET OUR MOBILE APP FOR EASY ACCESS
					</h4>
					<div className="flex items-center gap-5 lg:max-w-[380px]">
						<Link to="#0" className="block">
							<img className="max-w-full" src={google} alt="" />
						</Link>
						<Link to="#0" className="block">
							<img className="max-w-full" src={apple} alt="" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppBar;
