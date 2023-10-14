import { Routes, Route, HashRouter } from "react-router-dom";
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
		<>
			<HashRouter>
				<Routes>
					<Route exact path="/" element={<WholePage />} />
					<Route path="/automation" element={<Automation />} />
				</Routes>
			</HashRouter>
		</>
	);
};

export default App;
