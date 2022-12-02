import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Invalid from "../../components/header/icons/Invalid";
import Mail from "../../components/header/icons/Mail";
import useAuth from "../../hooks/useAuth";

const VerifyEmail = () => {
	const [searchParams] = useSearchParams();
	const oobCode = searchParams.get("oobCode");
	const mode = searchParams.get("mode");
	const { isLoading, verifyingEmail } = useAuth();
	const [emailVerified, setEmailVerified] = useState(false);
	const [customLoad, setCustomLoad] = useState(true);
	const navigate = useNavigate()



	if (mode === "resetPassword") {
		navigate(`/reset-password?oobCode=${oobCode}`)
	}

	useEffect(() => {
		if (oobCode) {
			verifyingEmail(mode, oobCode, setEmailVerified, setCustomLoad);
		}
	}, []);

	if (!oobCode) {
		navigate('/')
	}

	if (customLoad || isLoading) {
		return (
			<div className="flex justify-center my-52">
				<div role="status">
					<svg
						aria-hidden="true"
						className="mr-2 w-8 h-8 text-gray-200 animate-spin  fill-primary"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				</div>
			</div>
		);
	}
	return (
		<>
			{emailVerified && (
				<section className="fixed top-0 left-0 z-[999] bg-bodyBg w-full h-full flex items-center justify-center">
					<div className="container max-w-[1151px]">
						<div className="border border-borderColor rounded-[20px] py-12 px-6 md:p-12 lg:pt-[95px] lg:pb-[140px] lg:px-[118px] text-center bg-sectionBg">
							<div className="mb-10 lg:mb-[80px] flex justify-center">
								<Mail />
							</div>
							<div className="text-[24px] sm:text-[35px] leading-[35px] font-[400] pb-5 border-b border-borderColor">
								Email Verified
							</div>
							<div className="mt-10 lg:mt-[80px] mb-8 md:mb-10 max-w-[575px] mx-auto text-[18px] sm:text-[30px] sm:leading-[30px]">
								Your email has been successfully verified, now you can
								login to your system.
							</div>
							<a
								href="/profile/general-overview"
								className="btn btn-primary rounded-[20px] py-[10px] sm:px-[31px] sm:py-[14px] lg:py-[19px] inline-block px-8"
							>
								Login
							</a>
						</div>
					</div>
				</section>
			)}
			{!emailVerified && (
				<section className="fixed top-0 left-0 z-[999] bg-bodyBg w-full h-full flex items-center justify-center">
					<div className="container max-w-[1151px]">
						<div className="border border-borderColor rounded-[20px] py-12 px-6 md:p-12 lg:pt-[95px] lg:pb-[140px] lg:px-[118px] text-center bg-sectionBg">
							<div className="mb-10 lg:mb-[80px] flex justify-center">
								<Invalid />
							</div>
							<div className="text-[24px] sm:text-[35px] leading-[35px] font-[400] pb-5 border-b border-borderColor">
								Something went wrong!
							</div>
							<div className="mt-10 lg:mt-[80px] mb-8 md:mb-10 max-w-[575px] mx-auto text-[18px] sm:text-[30px] sm:leading-[30px] text-[#C43F3F]">
								Your email could not be verified, please try again.
							</div>
							{/*  <button
                                className="btn btn-primary rounded-[20px] py-[10px] sm:px-[31px] sm:py-[14px] lg:py-[19px] inline-block px-8"
                            >
                                Try Again
                            </button> */}
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default VerifyEmail;
