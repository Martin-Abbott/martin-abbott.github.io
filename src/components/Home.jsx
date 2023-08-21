import React from "react";
import Portrait1 from "../assets/ma-portrait-1.jpeg";

const Home = () => {
	return (
		<section id="Home" className="flex flex-wrap py-32 justify-evenly">
			<article id="home-text" className="self-center">
				<h1 className="text-5xl text-center font-bold p-2">Hi, I'm Martin</h1>
				<p className="p-2 text-center">I write software</p>
			</article>
			<img
				src={Portrait1}
				alt="Me smiling in a walled garden"
				className="max-w-[65vw] min-w-[260px] max-h-[65vh] min-h-[260px] rounded-full m-2 self-center"
			></img>
		</section>
	);
};

export default Home;
