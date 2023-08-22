import React from "react";
import { SkillList } from "../assets/lists/SkillList";

const Skills = () => {
	return (
		<section
			id="Skills"
			className="flex flex-wrap py-4 justify-evenly text-center text-black"
		>
			<h2 className="text-5xl font-bold pt-20 pb-4 w-[85vw] max-w-[800px]">
				Skills
			</h2>
			<p className="p-8 w-[85vw] max-w-[800px]">
				I have worked with following languages, packages and environments:
			</p>
			<ul className="flex flex-wrap self-center text-center justify-evenly text-l max-w-[90vw] px-8 overscroll-auto overflow-scroll max-h-[45vh]">
				{SkillList.map((skill) => {
					return (
						<li
							key={skill.id}
							className="p-2 min-w-[120px] hover:scale-125 duration-300 group"
						>
							{skill.logo}
							{skill.text}
						</li>
					);
				})}
			</ul>
			<p className="p-8 w-[85vw] max-w-[800px]">
				This list is not exhaustive, and I am always happy to learn new
				technologies!
			</p>
		</section>
	);
};

export default Skills;
