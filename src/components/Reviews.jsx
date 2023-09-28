import Portrait2 from "../assets/images/ma-portrait-2.jpg";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
	return (
		<section
			id="Reviews"
			className="flex flex-wrap justify-evenly my-20 min-h-[80vh]"
		>
			<img
				src={Portrait2}
				alt="Me smiling in front of a timber building"
				className="max-w-[40vw] min-w-[200px] max-h-[50vh] min-h-[200px] rounded-full m-2 self-center"
			></img>
			<section id="review-text" className="self-center max-w-[75vw]">
				<h2 className="text-5xl text-center font-bold p-2 order-2">Reviews</h2>
				<p className="p-2 text-center">
					Here are some reviews and recommendations I&apos;ve received:
				</p>
				<ReviewSlider />
			</section>
		</section>
	);
};

export default Reviews;
