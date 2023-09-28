import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
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
