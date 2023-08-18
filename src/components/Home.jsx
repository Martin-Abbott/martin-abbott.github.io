import React from "react";
import Portrait from "../assets/ma-portrait-1.jpeg";

const Home = () => {
	return (
		<section id="home" className="flex flex-wrap py-36 justify-evenly">
			<article id="home-text" className="self-center">
				<h1 className="text-5xl text-center font-bold p-2">Hi, I'm Martin</h1>
				<h2 className="p-2 text-center">I write software</h2>
			</article>
			<img
				src={Portrait}
				alt="Me smiling in a walled garden"
				className="max-w-[65vw] min-w-[260px] max-h-[70vh] min-h-[260px] rounded-full m-2 self-center"
			></img>
		</section>
	);
};

export default Home;
