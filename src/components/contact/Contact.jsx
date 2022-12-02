import React from "react";
import SectionHeader from "../SectionHeader";
import ContactIcon from "./icons/ContactIcon";
import contact from "./img/contact.svg";
const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="py-[65px]">
			<div className="container">
				<SectionHeader
					icon={<ContactIcon />}
					title="Get In Touch"
					text="You can share any of your ideas or ask any queries about us."
				/>
				<div className="bg-sectionBg rounded-[20px] px-5 py-7 lg:px-[52px] lg:py-[42px] border border-borderColor flex flex-wrap md:flex-nowrap gap-[50px] items-center">
					<div className="w-full md:w-[60%] md:max-w-[529px]">
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								className="h-[54px] border border-borderColor mb-5 rounded-full w-full px-8 outline-0 bg-[#042237] sm:text-[20px] font-light"
								placeholder="Enter your name"
							/>
							<input
								type="text"
								className="h-[54px] border border-borderColor mb-5 rounded-full w-full px-8 outline-0 bg-[#042237] sm:text-[20px] font-light"
								placeholder="Enter your email address"
							/>
							<textarea
								className="h-[200px] md:h-[200px] lg:h-[240px] border border-borderColor mb-5 rounded-[30px] w-full px-8 outline-0 bg-[#042237] sm:text-[20px] font-light pt-7 resize-none"
								placeholder="Enter your message"
							></textarea>
							<button
								className="btn h-[54px] flex justify-center items-center rounded-full w-full px-8 outline-0 sm:text-[22px] font-medium"
								type="submit"
							>
								<span className="mt-1">Submit</span>
							</button>
						</form>
					</div>
					<div className="w-full md:w-[60%] md:max-w-[505px]">
						<img src={contact} className="w-full" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
