import Automation from "../assets/images/automation.jpg";
import ReasonSlider from "./ReasonSlider";

const Reviews = () => {
	return (
		<section
			id="Reviews"
			className="flex flex-wrap justify-evenly my-20 min-h-[80vh]"
		>
			<img
				src={Automation}
				alt="Robotic arms in a manufacturing facility"
				className="max-w-[35vw] min-w-[180px] max-h-[35vh] min-h-[180px] rounded-full m-2 self-center xs:min-h-[210px] xs:min-w-[210px] lg:max-w-[55vw] lg:max-h-[55vh]"
				loading="lazy"
			></img>
			<section
				id="review-text"
				className="self-center max-w-[85vw] md:max-w-[75vw]"
			>
				<h2 className="text-4xl md:text-5xl text-center font-bold p-2 order-2">
					Why Automate?
				</h2>
				<p className="max-w-[425px] p-2 text-center">
					Here are some of the numerous reasons to automate your engineering
					processes:
				</p>
				<ReasonSlider />
			</section>
		</section>
	);
};

export default Reviews;
