import { useEffect } from "react";
import ReactGA from "react-ga4";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

ReactGA.initialize("G-XYKKFRZLKV");

const App = () => {
	useEffect(() => {
		ReactGA.send({
			hitType: "pageview",
			page: window.location.pathname + window.location.search,
			title: "homePage",
		});
	}, []);

	return (
		<div>
			<Nav />
			<Home />
			<Skills />
			<Reviews />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
