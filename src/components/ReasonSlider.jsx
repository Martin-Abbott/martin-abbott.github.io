import { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { reasonList } from "../assets/lists/reasonList";

const ReasonSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevReason = () => {
		const isFirstReason = currentIndex === 0;
		const newIndex = isFirstReason ? reasonList.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextReason = () => {
		const isLastReason = currentIndex === reasonList.length - 1;
		const newIndex = isLastReason ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<section className="flex self-center text-center p-2 w-[450px] max-w-[85vw] border rounded-xl m-auto group md:max-w-[75vw]">
			<div className="flex duration-500 p-2 justify-self-center">
				<article className="flex flex-col text-center m-auto h-[310px] xs:h-[230px]">
					<p className="m-auto italic">{reasonList[currentIndex].reasonText}</p>
					<section className="flex place-content-between p-2">
						<button
							className="text-2xl rounded-full p-2 text-black cursor-pointer focus:shadow-outline hover:scale-125 duration-300"
							aria-label="Previous Reason"
						>
							<FaCircleArrowLeft onClick={prevReason} size={30} />
						</button>
						<p className="self-center">{reasonList[currentIndex].reasonName}</p>
						<button
							className="text-2xl rounded-full p-2 text-black cursor-pointer focus:shadow-outline hover:scale-125 duration-300"
							aria-label="Next Reason"
						>
							<FaCircleArrowRight onClick={nextReason} size={30} />
						</button>
					</section>
				</article>
			</div>
		</section>
	);
};

export default ReasonSlider;
