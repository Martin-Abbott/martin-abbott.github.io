import React from "react";
import Portrait2 from "../assets/ma-portrait-2.jpg";

const About = () => {
	return (
		<section id="about" className="flex flex-wrap py-32 justify-evenly">
			<img
				src={Portrait2}
				alt="Me smiling in a walled garden"
				className="max-w-[700px] min-w-[260px] max-h-[50vh] min-h-[260px] rounded-full m-2 self-center"
			></img>
			<article id="about-text" className="self-center max-w-[45vw]">
				<h2 className="text-5xl text-center font-bold p-2 order-2">About Me</h2>
				<p className="p-2 text-center">
					I'm a former design engineer, turned software developer.
				</p>
				<p className="p-2 text-center">
					I have a keen eye for detail, I relish a challenge, and I love
					learning new skills.
				</p>
			</article>
		</section>
	);
};

export default About;
