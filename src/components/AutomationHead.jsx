import Process from "../assets/images/process.jpg";

const AutomationHead = () => {
	return (
		<section
			id="Home"
			className="flex flex-wrap my-20 min-h-[80vh] justify-evenly"
		>
			<article id="home-text" className="self-center">
				<h1 className="text-5xl text-center font-bold p-2">
					Engineering Automation
				</h1>
				<p className="max-w-[550px] text-center p-4">
					In the cutting-edge world of engineering, it is important to ensure
					that you leverage every possible competitive advantage.<br></br>
				</p>
				<p className="max-w-[550px] text-center p-4">
					In this presentation, I&apos;ll be discussing some of the benefits of
					automation when communicating and interrogating our engineering
					intent.
				</p>
			</article>
			<img
				src={Process}
				alt="A laptop screen showing a process flow diagram"
				className="max-w-[45vw] min-w-[200px] max-h-[45vh] min-h-[200px] rounded-full m-2 self-center"
			></img>
		</section>
	);
};

export default AutomationHead;
