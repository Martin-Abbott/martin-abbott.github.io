import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Skills from "./Skills";
import Reviews from "./Reviews";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const WholePage = () => {
	return (
		<>
			<Nav />
			<Home />
			<Skills />
			<Reviews />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default WholePage;
