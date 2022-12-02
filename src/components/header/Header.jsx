import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "./components/Input";
import Logo from "./components/Logo";
import SignInFirst from "./components/SignInFirst";
import Bar from "./icons/Bar";
import Bell from "./icons/Bell";
import Caret from "./icons/Caret";
import Close from "./icons/Close";
import CloseIcon from "./icons/CloseIcon";
import Cog from "./icons/Cog";
import Cross from "./icons/Cross";
import Earning from "./icons/Earning";
import Envelop from "./icons/Envelop";
import Expert from "./icons/Expert";
import Google from "./icons/Google";
import Lock from "./icons/Lock";
import Message from "./icons/Message";
import Profile from "./icons/Profile";
import Search from "./icons/Search";
import SignOut from "./icons/SignOut";
import Suitcase from "./icons/Suitcase";
import demoUserImg from "./icons/user.svg";

const Header = ({
	userModal,
	setUserModal,
	setNotifiOpen,
	notifiOpen,
	messagesOpen,
	setMessagesOpen,
}) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [inputData, setInputData] = useState({});
	const [authError, setAuthError] = useState({
		status: false,
		text: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const [searchCate, setSearchCate] = useState(0);
	const [cateOpen, setCateOpen] = useState(false);
	const [verify, setVerify] = useState(false);
	const [openLoginModal, setOpenLoginModal] = useState(true);
	const [agree, setAgree] = useState(true);
	const [notifications, setNotifications] = useState([""]);
	const [messages, setMessages] = useState([""]);
	const [recentSignUpUserEmail, setRecentSignUpUserEmail] = useState("");
	const [forgetPass, setForgetPass] = useState(false);
	const [emailForReset, setEmailForReset] = useState("");

	const handleCate = () => {
		setCateOpen(!cateOpen);
	};

	const navigate = useNavigate();

	const {
		SignInWithGoogle,
		user,
		logOutUser,
		signUpWithEmail,
		loginWithEmail,
		isLoading,
		resetUserPassword,
	} = useAuth();

	const handleGoogleSignIn = () => {
		SignInWithGoogle();
		setUserModal(false);
	};

	const handleLogOut = () => {
		logOutUser();
		setUserModal(false);
	};

	const handleOnChange = (e) => {
		const currentData = inputData;
		currentData[e.target.name] = e.target.value;
		setInputData(currentData);
	};

	//Sign Up Form Handling
	const handleSignUpForm = (e) => {
		e.preventDefault();

		if (isLoading) {
			return;
		} else {
			if (inputData.password !== inputData.confirm_password) {
				setAuthError({
					status: true,
					text: "Password does not match!",
				});
				return;
			} else if (inputData.password.length < 6) {
				setAuthError({
					status: true,
					text: "Password lenth is minimum 6 digit",
				});
				return;
			}

			setAuthError({
				status: false,
				text: "",
			});

			signUpWithEmail(
				inputData.email,
				inputData.password,
				inputData.name,
				setAuthError,
				setUserModal,
				setVerify,
				setRecentSignUpUserEmail
			);
		}
	};

	//Login Via Email
	const handleLogin = (e) => {
		e.preventDefault();
		if (isLoading) {
			return;
		} else {
			if (inputData.password.length < 6) {
				setAuthError({
					status: true,
					text: "Password lenth is minimum 6 Digit",
				});
				return;
			}

			setAuthError({
				status: false,
				text: "",
			});

			loginWithEmail(inputData.email, inputData.password, setAuthError);
		}
	};

	//Reset password
	const handleSubmitResetEmail = () => {
		if (emailForReset.includes("@")) {
			resetUserPassword(
				emailForReset,
				setForgetPass,
				setVerify,
				setRecentSignUpUserEmail
			);
		}
	};

	// Notification
	const handleNotify = () => {
		setNotifiOpen(!notifiOpen);
		setUserModal(false);
		setMessagesOpen(false);
	};
	// User Modal
	const handleUserModal = () => {
		setUserModal(!userModal);
		setMessagesOpen(false);
		setNotifiOpen(false);
		setForgetPass(false);
	};
	// User Modal
	const handleMessages = () => {
		setMessagesOpen(!messagesOpen);
		setNotifiOpen(false);
		setUserModal(false);
	};

	const handleSearchBtn = () => {
		if (searchCate === 0) {
			navigate("/find-expert");
		} else {
			navigate("/find-job");
		}
	};

	const handleForgetPass = () => {
		setUserModal(false);
		setMessagesOpen(false);
		setNotifiOpen(false);
		setForgetPass(!forgetPass);
	};

	const closeModal = () => {
		setUserModal(false);
		setMessagesOpen(false);
		setNotifiOpen(false);
		setForgetPass(false);
	};

	return (
		<>
			<header className="py-5 md:py-7 bg-sectionBg border-b border-borderColor sticky top-0 z-10">
				{cateOpen && (
					<div
						className="fixed inset-0 top-[73px] md:top-[89px] backdrop-blur-[2px] z-50"
						onClick={handleCate}
					></div>
				)}
				<div className="container">
					<div className="flex items-center justify-between">
						<Link className="w-40 block logo" to="/">
							<Logo />
						</Link>
						<div
							className="header-bar lg:hidden h-8 w-8 flex items-center justify-center ml-auto mr-3"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							{menuOpen ? <Close /> : <Bar />}
						</div>
						<div
							className={`absolute px-5 py-6 sm:p-10 lg:p-0 bg-sectionBg w-full lg:w-0 top-[calc(100%+1px)] left-0 lg:left[unset] z-50 lg:relative lg:flex justify-between items-center flex-grow duration-300 ${
								menuOpen
									? ""
									: "translate-y-3 lg:translate-y-0 opacity-0 lg:opacity-100 max--v-hidden lg:visible"
							}`}
						>
							<ul className="flex flex-col lg:flex-row gap-3 xl:gap-x-6 lg:pl-12 mb-4 lg:mb-0">
								<li className="relative">
									<SignInFirst
										menuText="Post Task"
										menuLink="task/new-post"
										text="To create a task post you must have to sign in first."
										handleUserModal={handleUserModal}
										userModal={userModal}
									/>
								</li>
								<li className="relative">
									<SignInFirst
										menuText="Browse Task"
										menuLink="/browse-tasks"
										text="To browse a task you must have to sign in first."
										handleUserModal={handleUserModal}
										userModal={userModal}
									/>
								</li>
								<li>
									<Link
										to="/terms-of-service"
										className="hover:text-primary"
									>
										Terms & Conditions
									</Link>
								</li>
								<li>
									<Link to="/about-us" className="hover:text-primary">
										About Lekaaz
									</Link>
								</li>
							</ul>

							<div className="flex flex-wrap gap-3 xl:gap-6 items-center">
								<form onSubmit={handleSubmit} className="relative">
									<input
										type="text"
										className="h-[30px] w-[212px] bg-white outline-0 text-bodyBg rounded-full pl-4 pr-[55px] placeholder:text-bodyBg"
										placeholder="Search"
									/>
									<div
										className="absolute right-9 z-10 w-4 h-full top-0 flex items-center justify-center cursor-pointer group"
										onClick={handleCate}
									>
										<Caret />
										<ul
											className={`absolute top-[calc(100%+4.5px)] right-0 rounded-[15px]  min-w-[103px] text-[15px] font-light whitespace-nowrap duration-300 ${
												cateOpen
													? ""
													: "translate-y-1 opacity-0 v-hidden"
											}`}
										>
											<li>
												<button
													className={`px-[11px] w-full flex pt-[6px] pb-[2px] items-center rounded-t-[15px] bg-bodyBg border border-white ${
														searchCate === 0
															? "rounded-b-[15px] bg-primary text-bodyBg z-10 relative py-2"
															: "border-b-0 pb-[19px] pt-[5px] mb-[-13px]"
													}`}
													type="button"
													onClick={() => setSearchCate(0)}
												>
													<Expert
														active={
															searchCate === 0 ? "active" : ""
														}
													/>
													<span className="ml-1">Find Expert</span>
												</button>
											</li>
											<li>
												<button
													className={`px-[11px] w-full flex pt-[6px] pb-[4px]  items-center rounded-b-[15px] bg-bodyBg border border-white py-2 ${
														searchCate === 1
															? "rounded-t-[15px] bg-primary text-bodyBg z-10 relative py-2"
															: "border-t-0 pt-[19px] pb-[5px] translate-y-[-13px]"
													}`}
													type="button"
													onClick={() => setSearchCate(1)}
												>
													<Suitcase
														active={
															searchCate === 1 ? "active" : ""
														}
													/>
													<span className="ml-1">Find Job</span>
												</button>
											</li>
										</ul>
									</div>
									<button
										type="submit"
										className="absolute top-[3.5px] right-1 z-10"
										onClick={handleSearchBtn}
									>
										<Search />
									</button>
								</form>
							</div>
						</div>
						{user ? (
							<>
								<button
									type="button"
									onClick={handleMessages}
									className="ml-3 sm:ml-4"
								>
									<Message />
								</button>
								<button
									type="button"
									onClick={handleNotify}
									className="ml-3 sm:ml-4"
								>
									<Bell />
								</button>
								<button
									type="button"
									className="ml-3 sm:ml-4"
									onClick={handleUserModal}
								>
									<img
										className="rounded-full w-8 aspect-square object-cover border-2 border-primary"
										src={user.photoURL ? user.photoURL : demoUserImg}
										alt=""
									/>
								</button>
							</>
						) : (
							<button
								type="button"
								className="btn btn-sm ml-3"
								onClick={handleUserModal}
							>
								Sign In
							</button>
						)}

						<div className="relative">
							{!user && forgetPass && (
								<>
									<div
										className="fixed inset-0 top-[73px] md:top-[89px] backdrop-blur-[2px] z-50"
										onClick={() => setVerify(false)}
									></div>
									<div className="absolute top-[calc(100%+30px)] bg-sectionBg rounded-[16px] border border-borderColor w-[336px] z-[100] right-0 auth-form">
										<div
											className="absolute right-[-1px] top-[-1px] cursor-pointer"
											onClick={closeModal}
										>
											<CloseIcon />
										</div>
										<div className="pt-[16px] pb-3 px-4">
											<h4 className="text-[18px] font-medium text-center">
												Change Password
											</h4>
										</div>
										<div className="bg-bodyBg rounded-[16px] border-t border-borderColor px-4 pt-[18px] pb-2 xl:py-16">
											<div className="py-6 text-center text-[18px] font-light">
												<div className="text-[22px] text-[#40494F]">
													Enter your email
												</div>
												<input
													onChange={(e) =>
														setEmailForReset(e.target.value)
													}
													type="text"
													className="mt-[11px] mb-[17px] h-[39px] rounded-[20px] w-full max-w-[254px] border-0 outline-none shadow-none text-black px-4 font-normal"
												/>
												<button
													className="btn-sm btn"
													type="button"
													onClick={handleSubmitResetEmail}
												>
													{isLoading ? (
														<div
															role="status"
															className="flex justify-center justify-items-center"
															style={{ width: "50px" }}
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
													) : (
														"Send"
													)}
												</button>
												<div
													className="mt-12 cursor-pointer"
													onClick={handleUserModal}
												>
													Back to sign in
												</div>
											</div>
										</div>
									</div>
								</>
							)}
							{userModal && (
								<>
									<div
										className="fixed inset-0 top-[73px] md:top-[89px] backdrop-blur-[2px] z-50"
										onClick={handleUserModal}
									></div>

									{/* Not Authenticated */}
									{!user && (
										<div className="absolute top-[calc(100%+30px)] bg-sectionBg rounded-[16px] border border-borderColor w-[336px] z-[100] right-0 auth-form">
											<div className="flex pt-[21px] pb-3 justify-center">
												<button
													className={`btn-sm px-3 pt-[6px] pb-[5px] rounded-r-none ${
														!openLoginModal
															? "btn-outline hover:bg-transparent hover:text-white"
															: "btn bg-primary hover:bg-primary hover:text-bodyBg"
													}`}
													onClick={() => setOpenLoginModal(true)}
												>
													Sign In
												</button>
												<button
													className={` px-3 pt-[6px] pb-[5px] btn-sm rounded-l-none ${
														openLoginModal
															? "btn-outline hover:bg-transparent hover:text-white"
															: "btn bg-primary hover:bg-primary hover:text-bodyBg"
													}`}
													onClick={() => setOpenLoginModal(false)}
												>
													Sign Up
												</button>
												<div
													className="absolute right-[-1px] top-[-1px] cursor-pointer"
													onClick={handleUserModal}
												>
													<CloseIcon />
												</div>
											</div>
											{openLoginModal ? (
												<form onSubmit={handleLogin}>
													<div className="bg-bodyBg rounded-[16px] border-t border-borderColor px-[37px] pt-[41px] pb-[30px]">
														{/* Invalid Error */}
														{authError.status && (
															<div className="mx-[-37px] bg-[#C43F3F] py-3 px-12 flex items-center mb-3">
																<span
																	onClick={() =>
																		setAuthError({
																			status: false,
																			text: "",
																		})
																	}
																	className="cursor-pointer"
																>
																	<Cross />
																</span>
																<div className="w-0 flex-grow font-light pl-3 text-[16px] leading-4">
																	{authError.text}
																</div>
															</div>
														)}

														{/* Invalid Error */}
														<Input
															onChange={handleOnChange}
															name="email"
															icon={<Envelop />}
															placeholder="Email"
															type="text"
															className="mb-[15px]"
														/>
														<Input
															onChange={handleOnChange}
															name="password"
															icon={<Lock />}
															placeholder="Password"
															type="password"
														/>
														<span
															className="block mt-1 mb-[18px] cursor-pointer"
															onClick={handleForgetPass}
														>
															Forgot you password?
														</span>
														<button
															className="btn text-white w-full py-0 text-[18px] h-[39px]"
															type="submit"
														>
															{isLoading ? (
																<div
																	role="status"
																	className="flex justify-center justify-items-center"
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
															) : (
																"Login"
															)}
														</button>
														<div className="flex items-center text-primary text-[18px] my-[11px]">
															<span className="bg-primary w-2 block h-[1px] flex-grow"></span>
															<span className="px-2">Or</span>
															<span className="bg-primary w-2 block h-[1px] flex-grow"></span>
														</div>
														<button
															onClick={handleGoogleSignIn}
															className="flex text-[#A9B3C4] font-light rounded-full bg-white pt-[8px] pb-[7px] px-[15px] w-full"
														>
															<Google />
															<span className="pl-[11px]">
																Continue with Google
															</span>
														</button>
														<span className="block mt-1 ml-1">
															Have not account yet?
														</span>
														<div className="text-right">
															<button
																type="button"
																className="btn btn-sm text-white"
																onClick={() =>
																	setOpenLoginModal(
																		!openLoginModal
																	)
																}
															>
																Sign Up
															</button>
														</div>
													</div>
												</form>
											) : (
												<form onSubmit={handleSignUpForm}>
													<div className="bg-bodyBg rounded-[16px] border-t border-borderColor px-[34px] pt-[41px] pb-[30px]">
														{/* Invalid Error */}
														{authError.status && (
															<div className="mx-[-34px] bg-[#C43F3F] py-3 px-12 flex items-center mb-3">
																<span
																	onClick={() =>
																		setAuthError({
																			status: false,
																			text: "",
																		})
																	}
																	className="cursor-pointer"
																>
																	<Cross />
																</span>
																<div className="w-0 flex-grow font-light pl-3 text-[16px] leading-4">
																	{authError.text}
																</div>
															</div>
														)}

														{/* Invalid Error */}
														<Input
															required
															onChange={handleOnChange}
															name="name"
															placeholder="Name"
															type="text"
															className="mb-[15px]"
														/>
														<Input
															required
															onChange={handleOnChange}
															name="email"
															placeholder="Email"
															type="email"
															className="mb-[15px]"
														/>
														<Input
															required
															onChange={handleOnChange}
															name="password"
															placeholder="Password"
															type="password"
															className="mb-[15px]"
														/>
														<Input
															required
															onChange={handleOnChange}
															name="confirm_password"
															placeholder="Confirm Password"
															type="password"
															className="mb-[15px]"
														/>
														<button
															className="btn text-white w-full py-0 text-[18px] h-[39px]"
															type="submit"
														>
															{isLoading ? (
																<div
																	role="status"
																	className="flex justify-center justify-items-center"
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
															) : (
																"Sign Up"
															)}
														</button>
														<label className="m-0 font-light text-[16px] leading-4 mt-[10px] block">
															<input
																type="checkbox"
																value={agree}
																onChange={(e) =>
																	setAgree(e.target.value)
																}
																hidden
															/>
															<span className="block">
																<svg
																	width="16"
																	height="16"
																	viewBox="0 0 16 16"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM6.4 12L2.4 8L3.528 6.872L6.4 9.736L12.472 3.664L13.6 4.8L6.4 12Z"
																		fill="#3FC48B"
																	/>
																</svg>
															</span>
															<div className="first-letter:pl-[21px] mt-[-13px]">
																I'm aware of the terms &
																conditions of this organization
																and I will definitely follow
																that.{" "}
																<Link
																	className="font-bold"
																	to="/"
																	style={{
																		textDecoration:
																			"underline",
																	}}
																>
																	Terms & Conditions...
																</Link>
															</div>
														</label>
													</div>
												</form>
											)}
										</div>
									)}

									{/* Authenticated */}
									{user && (
										<div className="absolute top-[calc(100%+30px)] bg-sectionBg rounded-[16px] border border-borderColor w-[182px] z-[100] right-0 auth-form">
											<div className="flex pt-[21px] pb-3 justify-center">
												<h4>{user?.displayName}</h4>
											</div>
											<div className="bg-bodyBg rounded-[16px] border-t border-borderColor px-4 pt-[18px] pb-2">
												<ul
													className="text-[18px] authenticated-menu"
													onClick={handleUserModal}
												>
													<li>
														<NavLink
															className="inline-flex items-center px-3 rounded-full"
															to="/profile/general-overview"
														>
															<Profile />{" "}
															<span className="pl-1">
																Profile
															</span>
														</NavLink>
													</li>
													<li>
														<NavLink
															className="inline-flex items-center px-3 rounded-full"
															to="/profile/work-history"
														>
															<Suitcase />{" "}
															<span className="pl-1">
																Work List
															</span>
														</NavLink>
													</li>
													<li>
														<NavLink
															className="inline-flex items-center px-3 rounded-full"
															to="/profile/earnings"
														>
															<Earning />{" "}
															<span className="pl-1">
																Earnings
															</span>
														</NavLink>
													</li>
													<li>
														<NavLink
															className="inline-flex items-center px-3 rounded-full"
															to="/profile/settings"
														>
															<Cog />{" "}
															<span className="pl-1">
																Settings
															</span>
														</NavLink>
													</li>
													<li>
														<Link
															className="inline-flex items-center px-3 rounded-full"
															to="#0"
															onClick={handleLogOut}
														>
															<SignOut />{" "}
															<span className="pl-1">
																Sign Out
															</span>
														</Link>
													</li>
												</ul>
											</div>
										</div>
									)}
								</>
							)}
							{/* Recent Mail Popup if Mail not Verified */}
							{verify && (
								<>
									<div
										className="fixed inset-0 top-[73px] md:top-[89px] backdrop-blur-[2px] z-50"
										onClick={() => setVerify(false)}
									></div>
									<div className="absolute top-[calc(100%+30px)] bg-sectionBg rounded-[16px] border border-borderColor w-[336px] z-[100] right-0 auth-form">
										<div
											className="absolute right-[-1px] top-[-1px] cursor-pointer"
											onClick={() => setVerify(false)}
										>
											<CloseIcon />
										</div>
										<form>
											<div className="flex pt-[21px] pb-3 justify-center">
												<h4 className="md:text-normal md:font-medium">
													Verify your email
												</h4>
											</div>
											<div className="bg-bodyBg rounded-[16px] border-t border-borderColor px-[37px] pt-[30px] pb-[30px] md:text-[20px] leading-[20px] tracking-tighter font-light">
												<div className="text-center max-w-[272px] mb-16 text-[#7C8083]">
													This action requires email verification.
													Please check your inbox and follow the
													instructions.
													<br />
													Note :{" "}
													<span className="font-bold">
														Please check your spam box . Sometimes
														verification email may go to spam box
														too
													</span>
												</div>
												<div className="text-center mb-16">
													<div className="text-primary">
														Verification email sent to
													</div>
													<div className="md:text-[18px] mt-1">
														{recentSignUpUserEmail}
													</div>
												</div>
											</div>
										</form>
									</div>
								</>
							)}
							{/* Notification Popup */}
							{notifiOpen && (
								<>
									<div
										className="fixed inset-0 top-[73px] md:top-[89px] backdrop-blur-[2px] z-50"
										onClick={handleNotify}
									></div>

									<div className="absolute top-[calc(100%+30px)] bg-sectionBg rounded-[16px] border border-borderColor w-[191px] z-[100] right-5 sm:right-[40px] auth-form">
										<div className="flex pt-[16px] pb-3 px-4">
											<h4 className="text-[18px] font-light">
												Notifications
											</h4>
										</div>
										<div className="bg-bodyBg rounded-[16px] border-t border-borderColor px-4 pt-[18px] pb-2">
											{notifications.length > 1 ? (
												<></>
											) : (
												<>
													<div className="py-9 text-center text-[18px] font-light text-[#414950]">
														No new notifications
													</div>
												</>
											)}
										</div>
									</div>
								</>
							)}
							{messagesOpen && (
								<>
									<div
										className="fixed inset-0 top-[73px] md:top-[89px] backdrop-blur-[2px] z-50"
										onClick={handleMessages}
									></div>

									<div className="absolute top-[calc(100%+30px)] bg-sectionBg rounded-[16px] border border-borderColor w-[309px] z-[100] right-5 sm:right-[60px] auth-form">
										<div className="flex pt-[16px] pb-3 px-4">
											<h4 className="text-[18px] font-light">
												Message
											</h4>
										</div>
										<div className="bg-bodyBg rounded-[16px] border-t border-borderColor px-4 pt-[18px] pb-2 h-[510px] max-h-[calc(100vh-100px)]">
											{messages.length > 1 ? (
												<></>
											) : (
												<>
													<div className="py-9 text-center text-[18px] font-light text-[#414950]">
														No new messages
													</div>
												</>
											)}
										</div>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
