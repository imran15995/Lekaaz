import React from "react";
import { useParams } from "react-router-dom";
import SidebarSingleItem from "./components/SidebarSingleItem";
import SingleItem from "./components/SingleItem";
import data, { sidebarData } from "./data/data.js";
const BrowseTask = () => {
	const { id } = useParams();
	const newData = data.find(
		({ url, mainTitle, articleWidgets }, i) =>
			url === id && {
				mainTitle,
				articleWidgets,
			}
	);
	const title = newData && newData.mainTitle;
	const articleData = newData && newData.articleWidgets;

	return (
		<div className="py-16">
			<div className="container">
				<div className="flex flex-wrap gap-[39px]">
					{/* Left Left */}
					<div className="w-full md:max-w-[296px] group">
						<div className="sticky top-24 flex flex-col gap-8 md:gap-16">
							<SidebarSingleItem data={sidebarData} />
						</div>
					</div>
					{/* Right Data */}
					<div className="w-full md:w-0 flex-grow">
						<div className="rounded-[20px] lg:rounded-[25px] bg-sectionBg">
							{title && (
								<h2 className="text-[20px] md:text-[25px] py-[14px] px-6 text-center">
									{title}
								</h2>
							)}
							{!title && (
								<h2 className="text-[20px] md:text-[25px] py-[14px] px-6 text-center">
									Oops Sorry !!
								</h2>
							)}
							<div className="border border-borderColor pt-[25px] pb-3 rounded-[25px] bg-bodyBg">
								{/* Single Item */}
								<SingleItem data={articleData} />
								{!title && (
									<>
										<h1 className="text-[20px] md:text-[100px] py-[14px] px-6 text-center m-0 text:[36px] text-red-600">
											404
										</h1>

										<h2 className="font-medium text-[20px] md:text-[25px] py-[14px] px-6 text-center">
											The content you're searching for is not found
										</h2>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrowseTask;
