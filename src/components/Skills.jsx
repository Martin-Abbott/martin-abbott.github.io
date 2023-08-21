import React from "react";
import {
	DiHtml5,
	DiCss3,
	DiJsBadge,
	DiReact,
	DiPostgresql,
	DiMongodb,
	DiNpm,
} from "react-icons/di";
import {
	SiThreedotjs,
	SiVite,
	SiExpress,
	SiTailwindcss,
	SiJest,
	SiAxios,
	SiNodedotjs,
} from "react-icons/si";

const Skills = () => {
	const skillList = [
		{
			id: "skill01",
			text: "HTML",
			logo: <DiHtml5 size={55} className="m-auto hover:text-[#e34c26]" />,
		},
		{
			id: "skill02",
			text: "CSS",
			logo: <DiCss3 size={55} className="m-auto hover:text-[#264de4]" />,
		},
		{
			id: "skill03",
			text: "JavaScript",
			logo: <DiJsBadge size={55} className="m-auto hover:text-[#F0DB4F]" />,
		},
		{
			id: "skill04",
			text: "React",
			logo: <DiReact size={55} className="m-auto hover:text-[#61DBFB]" />,
		},
		{
			id: "skill05",
			text: "TailwindCSS",
			logo: <SiTailwindcss size={55} className="m-auto hover:text-[#38bdf8]" />,
		},
		{
			id: "skill06",
			text: "ThreeJS",
			logo: <SiThreedotjs size={55} className="m-auto hover:text-[#049EF4]" />,
		},
		{
			id: "skill07",
			text: "PostgreSQL",
			logo: <DiPostgresql size={55} className="m-auto hover:text-[#0064a5]" />,
		},
		{
			id: "skill08",
			text: "MongoDB",
			logo: <DiMongodb size={55} className="m-auto hover:text-[#00684a]" />,
		},
		{
			id: "skill09",
			text: "Express.js",
			logo: <SiExpress size={55} className="m-auto hover:text-[#259dff]" />,
		},
		{
			id: "skill10",
			text: "Vite",
			logo: <SiVite size={55} className="m-auto hover:text-[#bd34fe]" />,
		},
		{
			id: "skill11",
			text: "Jest",
			logo: <SiJest size={55} className="m-auto hover:text-[#8D485B]" />,
		},
		{
			id: "skill12",
			text: "NPM",
			logo: <DiNpm size={55} className="m-auto hover:text-[#CC3534]" />,
		},
		{
			id: "skill13",
			text: "Axios",
			logo: <SiAxios size={55} className="m-auto hover:text-[#3b6be3]" />,
		},
		{
			id: "skill14",
			text: "NodeJS",
			logo: <SiNodedotjs size={55} className="m-auto hover:text-[#5FA04E]" />,
		},
	];

	return (
		<section
			id="Skills"
			className="flex flex-wrap py-16 justify-evenly text-center text-black"
		>
			<h1 className="text-5xl font-bold pt-20 pb-4 w-[85vw] max-w-[800px]">
				Skills
			</h1>
			<p className="p-8">
				I have knowledge and experience in the following languages, packages and
				environments:
			</p>
			<ul className="flex flex-wrap self-center text-center justify-center text-l max-w-[90vw] px-8">
				{skillList.map((skill) => {
					return (
						<li key={skill.id} className="p-2 min-w-[120px]">
							{skill.logo}
							{skill.text}
						</li>
					);
				})}
			</ul>
			<p className="p-8">
				I am also happy to learn new technologies as/when required
			</p>
		</section>
	);
};

export default Skills;
