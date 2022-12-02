import React from "react";
import TermsIcon from "./icons/TermsIcon";

const TermsOfService = () => {
	return (
		<section className="pt-11 pb-16">
			<div className="container">
				<div className="flex justify-center mb-10">
					<TermsIcon />
				</div>
				<h2 className="text-center mb-10 text-base md:text-2xl">
					Terms & Conditions
				</h2>
				<div className="py-7 sm:py-8 px-7 sm:px-9 md:px-10 bg-sectionBg rounded-[20px] border border-borderColor sm:text-normal sm:font-normal sm:leading-[30.8px]">
					<ol
						className="pl-4 flex flex-col gap-1"
						style={{ listStyle: "numeric" }}
					>
						<li>
							To complete the registration you have to use authentic
							information.
						</li>
						<li>
							If you feel interested in working here then you have to
							prove your skill by certification or recognition from
							reputed institutions.
						</li>
						<li>
							After signing in to this application, you have to submit
							the required information and papers to get approval from
							the admin.
						</li>
						<li>
							If you want to take any services from workers, you have to
							deposit your money into the system to ensure secure
							payment.
						</li>
						<li>
							Your money will be yours until you get the service. After
							getting your service you have to confirm that you got your
							service and after that system will transfer your fund to
							the worker’s wallet.
						</li>
						<li>
							For offline service, you don’t have to deposit your money
							into the system. In this case, you will pay directly to the
							worker.
						</li>
						<li>
							To deposit your fund you have to pay 2% extra as a
							maintenance fee.
						</li>
						<li>If you feel something is spam please inform us.</li>
						<li>
							If you do anything against that violed our policy then you
							will be banned from Lekazz.
						</li>
					</ol>
				</div>
			</div>
		</section>
	);
};

export default TermsOfService;
