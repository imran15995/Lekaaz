import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Mousewheel, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data/data";
import Next from "./icons/Next";
import Prev from "./icons/Prev";
const BrowseCategory = () => {
	const ref = useRef();
	return (
		<>
			<div className="container">
				<div className="pt-6 pb-3 sm:pt-[30px] sm:pb-[30px] px-[25px] md:px-[50px] bg-sectionBg border border-borderColor rounded-[22px] relative mx-[23px]">
					<Swiper
						spaceBetween={15}
						speed={300}
						mousewheel={{
							forceToAxis: false,
						}}
						navigation={{
							nextEl: ".swiper-next",
							prevEl: ".swiper-prev",
						}}
						ref={ref}
						modules={[Navigation, Mousewheel]}
						breakpoints={{
							0: {
								slidesPerView: 2,
							},
							425: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							1024: {
								slidesPerView: 5,
							},
						}}
					>
						{data.map(({ img, name, link }, i) => (
							<SwiperSlide
								key={i}
								className="hover:scale-90 duration-300"
							>
								<Link to={link} className="text-center">
									<img
										src={img}
										className="h-[45px] max-w-[45px] sm:h-[55px] sm:max-w-[55px] mx-auto mb-[11px] object-contain "
										alt=""
									/>
									<h5 className="font-text text-xs font-normal">
										{name}
									</h5>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="swiper-prev absolute top-[50%] translate-y-[-23px] left-[-23px] cursor-pointer">
						<Prev />
					</div>
					<div className="swiper-next absolute top-[50%] translate-y-[-23px] right-[-23px] cursor-pointer">
						<Next />
					</div>
				</div>
			</div>
		</>
	);
};

export default BrowseCategory;
