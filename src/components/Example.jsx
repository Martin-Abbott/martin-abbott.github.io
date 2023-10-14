import Engineering from "../assets/images/engineering.jpg";

const Example = () => {
	return (
		<section
			id="Example"
			className="flex flex-wrap my-20 min-h-[80vh] justify-evenly"
		>
			<article id="home-text" className="self-center">
				<h1 className="text-4xl md:text-5xl text-center font-bold p-2">
					CAD Automation
				</h1>
				<p className="max-w-[550px] text-center p-4">
					Computer Aided Design is often a prime candidate for some degree of
					automation. Often the first step in implementing CAD automation is to
					identify the most repetitive tasks within your current design
					workload, as these are highly likely to be automatable.
				</p>
				<p className="max-w-[550px] text-center p-4">
					If we eliminated the most time consuming jobs from an engineer&apos;s
					daily workload, then imagine what they could achieve with that time!
				</p>
			</article>
			<img
				src={Engineering}
				alt="Two people reviewing engineering documents"
				className="max-w-[45vw] min-w-[200px] max-h-[45vh] min-h-[200px] rounded-full m-2 self-center"
			></img>
		</section>
	);
};

export default Example;
