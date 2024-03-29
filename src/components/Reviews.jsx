import democracyDog from "../assets/images/democracy-dog.jpeg";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
	return (
		<section
			id="Reviews"
			className="flex flex-wrap justify-evenly my-20 min-h-[80vh]"
		>
			<img
				src={democracyDog}
				alt="A cute puppy sat outside a polling station"
				className="max-w-[40vw] min-w-[180px] max-h-[40vh] min-h-[180px] rounded-full m-2 self-center xs:min-h-[210px] xs:min-w-[210px] lg:max-w-[60vw] lg:max-h-[60vh]"
				loading="lazy"
			></img>
			<section
				id="review-text"
				className="self-center max-w-[85vw] md:max-w-[75vw]"
			>
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
