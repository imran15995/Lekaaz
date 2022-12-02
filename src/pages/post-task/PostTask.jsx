import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "./components/Input";
import TaskLayout from "./components/TaskLayout";

const PostTask = () => {
	const navigate = useNavigate()
	return (
		<TaskLayout>
			<div className="bg-bodyBg rounded-[16px] border border-borderColor xl:mb-[25px] flex flex-col">
				<div className="pt-[16px] pb-3 px-4">
					<h4 className="text-[18px] text-center md:font-medium capitalize font-light">
						Post Task
					</h4>
				</div>
				<div className="bg-sectionBg rounded-[16px] border-t border-borderColor px-4 py-6 sm:px-[37px] sm:pt-[40px] sm:pb-[15px] flex-grow">
					<div className="flex flex-wrap gap-y-[35px] gap-x-[30px] xl:gap-x-[72px]">
						<div className="w-full sm:w-[calc(50%-18px)] xl:w-[calc(50%-36px)]">
							<Input
								label="Task Title"
								placeholder="Enter your task title"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-18px)] xl:w-[calc(50%-36px)]">
							<Input
								label="Task Type"
								placeholder="Enter your task type (online/offline)"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-18px)] xl:w-[calc(50%-36px)]">
							<Input
								label="task location (if have)"
								placeholder="Enter your location"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-18px)] xl:w-[calc(50%-36px)]">
							<Input
								label="budget"
								placeholder="Enter your budget"
								type="text"
								input
							/>
						</div>
						<div className="w-full sm:w-[calc(50%-18px)] xl:w-[calc(50%-36px)]">
							<Input
								label="Dateline"
								placeholder="Enter your datelien"
								type="text"
								input
							/>
						</div>
						<div className="w-full">
							<Input
								label="Describe your task in more detail"
								subtext="For your safety, please do not share personal information. e.g. email, phone or address."
								type="text"
								textarea
							/>
							<div className="text-center mt-[22px] pb-5">
								<button
									className="btn btn-sm h-[49px] px-7 md:text-[25px]"
									type="submit"
									onClick={() => navigate("/task/view-post")}
								>
									Post Task
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</TaskLayout>
	);
};

export default PostTask;
