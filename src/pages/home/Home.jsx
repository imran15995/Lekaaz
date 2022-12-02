import React from "react";
import Banner from "../../components/banner/Banner";
import BrowseCategory from "../../components/browse-category/BrowseCategory";
import Contact from "../../components/contact/Contact";
import AppBar from "../../components/Home/AppBar/AppBar";
import HowTo from "../../components/how-to/HowTo";
import Trending from "../../components/trending/Trending";
import WhyLekaaz from "../../components/why-lekaaz/WhyLekaaz";

const Home = () => {
	return (
		<>
			<Banner />
			<BrowseCategory />
			<Trending />
			<WhyLekaaz />
			<HowTo />
			<Contact />
			<AppBar />
		</>
	);
};

export default Home;
