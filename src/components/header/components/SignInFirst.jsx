import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SignInFirst = ({
	text,
	menuText,
	menuLink,
	handleUserModal,
	userModal,
}) => {
	const { user } = useAuth();
	return (
		<>
			<Link
				to={user ? menuLink : "#0"}
				className="hover:text-primary nav-menu"
				onClick={!user && userModal && handleUserModal}
			>
				{menuText}
			</Link>
			{!user && (
				<div className="absolute top-[calc(100%+30px)] bg-sectionBg rounded-[16px] border border-borderColor sm:w-[360px] z-[1000] left-0 v-hidden opacity-0 __nav-menu duration-300">
					<div className="flex pt-[16px] pb-3 px-4">
						<h4 className="text-[18px] font-light">
							Please Sign In First
						</h4>
					</div>
					<div className="bg-bodyBg rounded-[16px] border-t border-borderColor px-4 pt-[18px] pb-2">
						<div className="py-6 text-center text-[18px] font-light">
							<div>{text}</div>
							<button
								className="btn-sm btn mt-3"
								type="button"
								onClick={handleUserModal}
							>
								Sign In
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SignInFirst;
