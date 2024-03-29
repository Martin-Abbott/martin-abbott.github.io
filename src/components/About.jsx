import Portrait2 from "../assets/images/ma-portrait-2.jpg";

const About = () => {
	return (
		<section
			id="About"
			className="flex flex-wrap justify-evenly my-20 min-h-[80vh]"
		>
			<img
				src={Portrait2}
				alt="Me smiling in front of a timber building"
				className="max-w-[60vw] min-w-[200px] max-h-[60vh] min-h-[200px] rounded-full m-2 self-center"
				loading="lazy"
			></img>
			<article id="about-text" className="self-center max-w-[75vw]">
				<h2 className="text-5xl text-center font-bold p-2 order-2">About Me</h2>
				<p className="p-2 text-center">
					I&apos;m a former design engineer, turned software developer.
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
