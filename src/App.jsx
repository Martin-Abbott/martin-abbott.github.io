import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import WholePage from "./components/WholePage";
import Automation from "./components/Automation";

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
		<BrowserRouter>
			<>
				<Routes>
					<Route path="/" element={<WholePage />} />
					<Route path="/automation" element={<Automation />} />
				</Routes>
			</>
		</BrowserRouter>
	);
};

export default App;
