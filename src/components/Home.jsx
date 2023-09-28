import Portrait1 from "../assets/images/ma-portrait-1.jpeg";
import TypeWriter from "./Typewriter";

const Home = () => {
	const typeWriter = [
		"I write software",
		"I'm a former design engineer",
		"I love to learn",
		"I have a keen eye for detail",
		"I'm a problem solver",
		"I relish a challenge",
	];

	return (
		<section
			id="Home"
			className="flex flex-wrap my-20 min-h-[80vh] justify-evenly"
		>
			<article id="home-text" className="self-center">
				<h1 className="text-5xl text-center font-bold p-2">
					Hi, I&apos;m Martin
				</h1>
				<TypeWriter data={typeWriter} />
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
