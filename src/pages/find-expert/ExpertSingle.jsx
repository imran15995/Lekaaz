import React from "react";
import { Link, useParams } from "react-router-dom";
import demoUserImg from "../../components/header/icons/user.svg";
import EnvelopIcon from "../profile/icons/EnvelopIcon";
import FacebookIcon from "../profile/icons/FacebookIcon";
import PhoneIcon from "../profile/icons/PhoneIcon";
import VerifiedIcon from "../profile/icons/VerifiedIcon";
import data from "./data/data.js";
import FullStar from "./icon/FullStar";
import HalfStar from "./icon/HalfStar";
const ExpertSingle = () => {
	const { paramId } = useParams();
	const newData = data.find(
		({ img, name, designation, avg_rating, reviews, tags, id }, i) =>
			id === paramId && {
				img,
				name,
				designation,
				avg_rating,
				reviews,
				tags,
				id,
			}
	);

	const { img, name, designation, avg_rating, reviews, tags, desc } =
		newData && newData;
	return (
		<>
			<div className="pt-12 md:py-16">
				<div className="container">
					<div className="py-7 md:py-9 px-5 md:px-6 rounded-3xl border border-borderColor flex flex-wrap gap-10 bg-sectionBg">
						<div className="w-full sm:max-w-[210px]">
							<img
								src={img || demoUserImg}
								className="w-full aspect-square rounded-full object-cover max-w-[130px] xl:max-w-[245px]"
								alt=""
							/>
							<ul className="md:text-[17px] mt-5 md:mt-9 lg:ml-4">
								<li className="flex mb-2">
									<span className="mt-[3px] w-5">
										<VerifiedIcon />
									</span>
									<span className="w-0 flex-grow pl-2">
										Identity Verified
									</span>
								</li>
								<li className="flex mb-2">
									<span className="mt-[3px] w-5">
										<PhoneIcon />
									</span>
									<span className="w-0 flex-grow pl-2">
										Phone Verivied
									</span>
								</li>
								<li className="flex mb-2">
									<span className="mt-[3px] w-5">
										<EnvelopIcon />
									</span>
									<span className="w-0 flex-grow pl-2">
										Email Verivied
									</span>
								</li>
								<li className="flex mb-2">
									<span className="mt-[3px] w-5">
										<FacebookIcon />
									</span>
									<span className="w-0 flex-grow pl-2">
										Facebook Connected
									</span>
								</li>
							</ul>
						</div>
						<div className="w-full sm:w-0 flex-grow">
							<h3 className="text-[20px] md:text-[25px]">{name}</h3>
							<span className="font-light text-primary">
								{designation}
							</span>
							<div className="flex items-center font-light text-primary mt-2">
								<div className="flex justify-center font-light mb-4">
									{avg_rating <= 0.5 ? <HalfStar /> : <FullStar />}
									{avg_rating <= 1.5 ? <HalfStar /> : <FullStar />}
									{avg_rating <= 2.5 ? <HalfStar /> : <FullStar />}
									{avg_rating <= 3.5 ? <HalfStar /> : <FullStar />}
									{avg_rating <= 4.5 ? <HalfStar /> : <FullStar />}
									{avg_rating} ( {reviews} reviews )
								</div>
							</div>
							<div className="my-6 xl:mb-16 font-light leading-4">
								{desc}
							</div>
							<h4 className="text-[20px] sm:text-[25px] leading-[1] text-primary mb-4">
								Working Area
							</h4>
							<ul className="flex gap-x-7 gap-y-2 flex-wrap">
								{tags.map(({ tag, link }, i) => (
									<li key={i}>
										<Link
											to={link}
											className="rounded-full border border-borderColor pt-3 pb-2 px-3 inline-block font-light xl:font-normal text-[14px] xl:text-[17px] xl:leading-[18px] bg-bodyBg"
										>
											{tag}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExpertSingle;
