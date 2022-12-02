import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ProfileLayout from "../components/ProfileLayout";
import Input from "./components/Input";
import NextButton from "./components/NextButton";
import Title from "./components/Title";
import CameraIcon from "./icon/CameraIcon";
import img from "./img/user.svg";
const PersonalInformation = () => {
	const { user, changeUserName } = useAuth();
	const [name, setName] = useState(user.displayName);
	const navigate = useNavigate()
	const [changeLoading, setChangeLoading] = useState(false)

	const [file, setFile] = useState();
	function handleChange(e) {
		setFile(URL.createObjectURL(e.target.files[0]));
	}
	const [value, onChange] = useState(new Date("11-11-1998"));

	const handleNameChange = () => {
		if (user.displayName === name) {
			navigate('/profile/update-profile/contact-info')
		} else {
			changeUserName(name, navigate, "/profile/update-profile/contact-info", setChangeLoading)
		}
	}

	return (
		<ProfileLayout>
			<div>
				<Title title="Personal Information" />
				{/* Update Profile Card */}
				<div className="border border-borderColor rounded-[20px] p-4 sm:p-9 bg-sectionBg mb-6">
					<div className="flex flex-wrap items-start gap-[19px]">
						<div className="border border-dashed border-borderColor w-full max-w-[100px] lg:max-w-[196px] cursor-pointer">
							<label className="block  relative m-0 overflow-hidden rounded-full">
								<img
									src={
										file ? file : user.photoURL ? user.photoURL : img
									}
									className="w-full mx-auto h-full rounded-full object-cover aspect-square"
									alt=""
								/>
								<input type="file" onChange={handleChange} hidden />
								<div className="absolute left-[50%] translate-x-[-50%] bottom-4">
									<CameraIcon />
								</div>
							</label>
						</div>
						<div className="w-full md:max-w-[calc(100%-119px)] lg:max-w-[calc(100%-215px)]">
							<div className="mb-8">
								<Input
									label="profession"
									defaultValue="Web Designer"
									type="text"
									input
								/>
							</div>
							<div className="mb-8">
								<Input
									label="about you"
									oldVal="I'm really passionate about UI UX and web design by using latest technologies. It helps me to provide best satisfaction to the client. In this creative field, I'm working for 3 years. I have done a lot of projects yet. As well as, I'm extremely expert in the field of Graphic Design that will add extra advantage to visualise the concept of a project. I have completed my undergraduate degree in Software Engineering that wilI help me to reflect my knowledge in real life project."
									textarea
								/>
							</div>
						</div>
					</div>
					<div className="pt-[11px]">
						<div className="flex flex-wrap gap-[30px] lg:gap-x-[83px]">
							<div className="w-full">
								<Input
									onChange={e => setName(e.target.value)}
									label="Your Name"
									defaultValue={name}
									type="text"
									input
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<label
									className={`font-light text-primary text-[18px] leading-[18px] uppercase mb-0 block`}
								>
									DATE OF BIRTH
								</label>
								<DatePicker
									onChange={onChange}
									value={value}
									clearIcon={false}
									className="w-full mb-2 mt-2 h-[35px] text-left pl-4 text-[#BDBDBD]"
									calendarIcon={
										<>
											<svg
												width="12"
												height="8"
												viewBox="0 0 12 8"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 1L6 6L11 1"
													stroke="#BDBDBD"
													strokeWidth="1.5"
												/>
											</svg>
										</>
									}
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input label="Gender" defaultValue="Male" type="text" input />
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="blood group"
									defaultValue="B+"
									type="text"
									input
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="Nationality"
									defaultValue="Bangladeshi"
									type="text"
									input
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="National Id"
									defaultValue="2404904175"
									type="text"
									input
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="upload nid"
									type="file"
									input
									classes="__file-type"
									inputClass="file-type"
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="facebook"
									defaultValue="facebook.com/ihosen15995"
									type="text"
									input
								/>
							</div>
							<div className="w-full sm:w-[calc(50%-15px)] lg:w-[calc(50%-42px)]">
								<Input
									label="twitter"
									defaultValue="twitter.com/ihosen15995"
									type="text"
									input
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-2 md:pt-7 text-center">
					<button onClick={handleNameChange} className="btn h-[49px] px-8 lg:text-[25px]">
						{
							changeLoading ?
								<div
									role="status"
									className="flex justify-center justify-items-center"
									style={{ width: "120px" }}
								>
									<svg
										aria-hidden="true"
										className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="white"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="#3FC48B"
										/>
									</svg>
									<span className="sr-only">
										Loading...
									</span>
								</div>
								:
								"Save and Next"
						}
					</button>
				</div>

			</div>
		</ProfileLayout>
	);
};

export default PersonalInformation;
