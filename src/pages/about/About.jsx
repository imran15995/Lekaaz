import React from "react";
import AboutIcon from "./icons/AboutIcon";

const About = () => {
	return (
		<section className="pt-11 pb-16">
			<div className="container">
				<div className="flex justify-center mb-10">
					<AboutIcon />
				</div>
				<h2 className="text-center mb-10 text-base md:text-2xl">
					About Lekaaz
				</h2>
				<div className="py-7 sm:py-8 px-7 sm:px-9 bg-sectionBg rounded-[20px] border border-borderColor sm:text-normal sm:font-normal">
					Lekaaz is a web application where customer and workers are
					allowed to create an account for posting job or getting work
					based on their skill. It has largest categories of work including
					offline and online task in Bangladesh. Worker and customer will
					be able to communicate directly with each other for making deal.
					It ensures secure payment option in online-based work. Customer
					will be able to see the reviews on worker’s profile to take
					decision. Worker and customer both will be allowed to create
					profile from anywhere in Bangladesh so, it doesn’t not have any
					location dependency all over the country. After creating worker’s
					profile will be pending for getting approval from admin that will
					help to ensure safety and security. This application have 3 types
					of users these are customer, worker and admin.
				</div>
			</div>
		</section>
	);
};

export default About;
