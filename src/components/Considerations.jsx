import Teamwork from "../assets/images/teamwork.jpg";
import ConsiderationsSlider from "./ConsiderationsSlider";

const Considerations = () => {
	return (
		<section
			id="Reviews"
			className="flex flex-wrap justify-evenly my-20 min-h-[80vh]"
		>
			<img
				src={Teamwork}
				alt="Robotic arms in a manufacturing facility"
				className="max-w-[35vw] min-w-[180px] max-h-[35vh] min-h-[180px] rounded-full m-2 self-center xs:min-h-[210px] xs:min-w-[210px] lg:max-w-[55vw] lg:max-h-[55vh]"
				loading="lazy"
			></img>
			<section
				id="review-text"
				className="self-center max-w-[85vw] md:max-w-[75vw]"
			>
				<h2 className="text-4xl md:text-5xl text-center font-bold p-2 order-2">
					Considerations
				</h2>
				<p className="max-w-[450px] p-2 text-center">
					Some things to consider regarding engineering automation:
				</p>
				<ConsiderationsSlider />
			</section>
		</section>
	);
};

export default Considerations;
