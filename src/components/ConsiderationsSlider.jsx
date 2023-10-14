import { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { considerationsList } from "../assets/lists/considerationsList";

const ConsiderationsSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevConsideration = () => {
		const isFirstConsideration = currentIndex === 0;
		const newIndex = isFirstConsideration
			? considerationsList.length - 1
			: currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextConsideration = () => {
		const isLastConsideration = currentIndex === considerationsList.length - 1;
		const newIndex = isLastConsideration ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<section className="flex self-center text-center p-2 w-[450px] max-w-[85vw] border rounded-xl m-auto group md:max-w-[75vw]">
			<div className="flex duration-500 p-2 justify-self-center">
				<article className="flex flex-col text-center m-auto h-[310px] xs:h-[230px]">
					<p className="m-auto italic">
						{considerationsList[currentIndex].considerationText1}
					</p>
					<p className="m-auto italic">
						{considerationsList[currentIndex].considerationText2}
					</p>
					<section className="flex place-content-between p-2">
						<button
							className="text-2xl rounded-full p-2 text-black cursor-pointer focus:shadow-outline hover:scale-125 duration-300"
							aria-label="Previous Reason"
						>
							<FaCircleArrowLeft onClick={prevConsideration} size={30} />
						</button>
						<p className="self-center">
							{considerationsList[currentIndex].considerationName}
						</p>
						<button
							className="text-2xl rounded-full p-2 text-black cursor-pointer focus:shadow-outline hover:scale-125 duration-300"
							aria-label="Next Reason"
						>
							<FaCircleArrowRight onClick={nextConsideration} size={30} />
						</button>
					</section>
				</article>
			</div>
		</section>
	);
};

export default ConsiderationsSlider;
