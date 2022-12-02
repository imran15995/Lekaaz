import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-date-picker";
import useAuth from "../../hooks/useAuth";
import Input from "./update-profile/components/Input";
import Title from "./update-profile/components/Title";

const ProfileSetting = () => {
	const [value, onChange] = useState(new Date());
	const [deleteInfo, setDeleteInfo] = useState("")
	const [provider, setProvider] = useState("")
	const [customLoad, setCustomLoad] = useState(false)
	const [chnagePassInfo, setChangePassInfo] = useState({})
	const [workingToChangePassword, setWorkingToChangePassword] = useState(false)
	const [verifyPassword, setVerifyPassword] = useState("")
	const [newEmail, setNewEmail] = useState("")
	const [isWorking, setIsWorking] = useState(false)


	const { user, HandleDeleteUser, updateUserPassword, updateUserEmail } = useAuth()

	useEffect(() => {
		setProvider(user?.providerData[0]?.providerId)
	}, [user])


	const handleUpdateEmail = () => {
		if (verifyPassword && newEmail) {
			updateUserEmail(verifyPassword, newEmail, setIsWorking)
		} else {
			window.alert("Enter Uour Password And New Email")
		}
	}


	const handleDelete = () => {
		if (deleteInfo) {
			if (provider === "google.com") {
				if (deleteInfo === "DELETE") {
					HandleDeleteUser(provider, deleteInfo, setCustomLoad)
				}
			}
			else {
				HandleDeleteUser(provider, deleteInfo, setCustomLoad)
			}
		}
	}


	const handleChangePassword = () => {
		if (chnagePassInfo.new_confirm_password !== chnagePassInfo.new_password) {
			window.alert('New Password Does not matched')
			return;
		} else if (chnagePassInfo.new_password.length < 6) {
			window.alert('Password lenth is minimum 6 digit')
			return;
		}
		updateUserPassword(chnagePassInfo.old_password, chnagePassInfo.new_password, setWorkingToChangePassword)

	}

	const handleOnChange = (e) => {
		const currentData = chnagePassInfo;
		currentData[e.target.name] = e.target.value;
		setChangePassInfo(currentData);
	};

	return (
		<>
			<div className="container py-14">
				<Title title="Setting" />
				<div className="pt-3">
					<div className="flex flex-wrap gap-x-[44px] gap-y-[25px]">
						<div className="w-full md:w-[calc(50%-22px)]">
							{provider === "password" && <div className="bg-bodyBg rounded-[16px] border border-borderColor mb-[25px]">
								<div className="flex pt-[16px] pb-3 px-4">
									<h4 className="text-[18px] font-normal md:font-medium xl:text-[25px] xl:leading-[25px] xl:py-2">
										Update Email
									</h4>
								</div>
								<div className="bg-sectionBg rounded-[16px] border-t border-borderColor px-4 py-6 sm:px-[35px] sm:py-[36px]">
									<div className="text-[18px] font-light">
										<div className="mb-[25px]">
											<Input
												onChange={e => setNewEmail(e.target.value)}
												label="new email"
												labelClass="mb-0"
												defaultValue=""
												type="text"
												input
											/>
										</div>
										<div className="mb-[25px]">
											<Input
												onChange={e => setVerifyPassword(e.target.value)}
												label="password"
												labelClass="mb-0"
												defaultValue=""
												type="password"
												input
											/>
										</div>
										<div className="text-center">
											<button
												onClick={handleUpdateEmail}
												className="btn btn-sm pt-[13px] pb-[8px]"
												type="submit"
											>
												{
													isWorking ?
														<div
															role="status"
															className="flex justify-center justify-items-center"
															style={{ width: "140px" }}
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
														"Update Email"
												}
											</button>
										</div>
									</div>
								</div>
							</div>}
							<div className="bg-bodyBg rounded-[16px] border border-borderColor mb-[25px]">
								<div className="flex pt-[16px] pb-3 px-4">
									<h4 className="text-[18px] font-normal md:font-medium xl:text-[25px] xl:leading-[25px] xl:py-2">
										Add Payment Method
									</h4>
								</div>
								<div className="bg-sectionBg rounded-[16px] border-t border-borderColor px-4 py-6 sm:px-[35px] sm:py-[36px]">
									<div className="text-[18px] font-light">
										<div className="mb-[25px]">
											<Input
												label="Card number"
												labelClass="mb-0"
												defaultValue=""
												type="number"
												input
											/>
										</div>
										<div className="mb-[25px]">
											<label
												className={`font-light text-primary text-[18px] leading-[18px] uppercase mb-[7px] block`}
											>
												Expiry date
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
										<div className="mb-[25px]">
											<Input
												label="cvc"
												labelClass="mb-0"
												defaultValue=""
												type="number"
												input
											/>
										</div>
										<div className="text-center">
											<button
												className="btn btn-sm pt-[13px] pb-[8px]"
												type="submit"
											>
												Save Settings
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full md:w-[calc(50%-22px)]">
							{provider === "password" && <div className="bg-bodyBg rounded-[16px] border border-borderColor mb-[25px]">
								<div className="flex pt-[16px] pb-3 px-4">
									<h4 className="text-[18px] font-normal md:font-medium xl:text-[25px] xl:leading-[25px] xl:py-2">
										Change password
									</h4>
								</div>
								<div className="bg-sectionBg rounded-[16px] border-t border-borderColor px-4 py-6 sm:px-[35px] sm:py-[36px]">
									<div className="text-[18px] font-light">
										<div className="mb-[25px]">
											<Input
												name="old_password"
												onChange={handleOnChange}
												label="Old password"
												labelClass="mb-0"
												defaultValue=""
												type="password"
												input
											/>
										</div>
										<div className="mb-[25px]">
											<Input
												name="new_password"
												onChange={handleOnChange}
												label="New password"
												labelClass="mb-0"
												defaultValue=""
												type="password"
												input
											/>
										</div>
										<div className="mb-[25px]">
											<Input
												name="new_confirm_password"
												onChange={handleOnChange}
												label="Confirm New password"
												labelClass="mb-0"
												defaultValue=""
												type="password"
												input
											/>
										</div>
										<div className="text-center">
											<button
												onClick={handleChangePassword}
												className="btn btn-sm pt-[13px] pb-[8px]"
												type="submit"
											>
												{
													workingToChangePassword ?
														<div
															role="status"
															className="flex justify-center justify-items-center"
															style={{ width: "140px" }}
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
														"Save Settings"
												}
											</button>
										</div>
									</div>
								</div>
							</div>}
							<div className="bg-bodyBg rounded-[16px] border border-borderColor mb-[25px]">
								<div className="flex pt-[16px] pb-3 px-4">
									<h4 className="text-[18px] font-normal md:font-medium xl:text-[25px] xl:leading-[25px] xl:py-2">
										Delete Account
									</h4>
								</div>
								<div className="bg-sectionBg rounded-[16px] border-t border-borderColor px-4 py-6 sm:px-[35px] sm:py-[30px]">
									<div className="text-[18px] font-light">
										<div className="text-center mb-4 text-[#40494F] sm:text-[22px]">
											Deleting your account will remove all of your
											information from our database. This can not be
											undone.
										</div>
										<div className="mb-[25px]">
											<Input
												label={provider === "password" ? "Enter your Password To Delete" : "To confirm this type “Delete”"}
												labelClass="mb-0"
												defaultValue=""
												type={provider === "password" ? "password" : "text"}
												input
												onChange={e => setDeleteInfo(e.target.value)}
											/>
										</div>
										<div className="text-center">
											<button
												onClick={handleDelete}
												className="btn btn-sm pt-[13px] pb-[8px] bg-[#C43F3F] text-white border-[#C43F3F] hover:text-[#C43F3F]"
												type="submit"
											>
												{
													customLoad ?
														<div
															role="status"
															className="flex justify-center justify-items-center"
															style={{ width: "140px" }}
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
														"Delete Account"
												}
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileSetting;
