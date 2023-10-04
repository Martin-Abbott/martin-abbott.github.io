import { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { reviewList } from "../assets/lists/reviewList";

const ReviewSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(
		Math.round(Math.random() * (reviewList.length - 1))
	);

	const prevReview = () => {
		const isFirstReview = currentIndex === 0;
		const newIndex = isFirstReview ? reviewList.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextReview = () => {
		const isLastReview = currentIndex === reviewList.length - 1;
		const newIndex = isLastReview ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<section className="flex self-center text-center p-2 w-[450px] max-w-[85vw] border rounded-xl m-auto group md:max-w-[75vw]">
			<div className="flex duration-500 p-2 justify-self-center">
				<article className="flex flex-col text-center m-auto h-[280px] xs:h-[210px]">
					<p className="m-auto">
						&quot;{reviewList[currentIndex].textSnippet}&quot;
					</p>
					<section className="flex place-content-between p-2">
						<button
							className="text-2xl rounded-full p-2 text-black cursor-pointer focus:shadow-outline hover:scale-125 duration-300"
							aria-label="Previous Review"
						>
							<FaCircleArrowLeft onClick={prevReview} size={30} />
						</button>
						<p className="self-center">
							- {reviewList[currentIndex].firstName}{" "}
							{reviewList[currentIndex].lastName}
						</p>
						<button
							className="text-2xl rounded-full p-2 text-black cursor-pointer focus:shadow-outline hover:scale-125 duration-300"
							aria-label="Next Review"
						>
							<FaCircleArrowRight onClick={nextReview} size={30} />
						</button>
					</section>
				</article>
			</div>
		</section>
	);
};

export default ReviewSlider;
