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
	SiJquery,
} from "react-icons/si";

export const SkillList = [
	{
		id: "skill01",
		text: "HTML",
		logo: <DiHtml5 size={60} className="m-auto group-hover:text-[#e34c26]" />,
	},
	{
		id: "skill02",
		text: "CSS",
		logo: <DiCss3 size={60} className="m-auto group-hover:text-[#264de4]" />,
	},
	{
		id: "skill03",
		text: "JavaScript",
		logo: <DiJsBadge size={60} className="m-auto group-hover:text-[#F0DB4F]" />,
	},
	{
		id: "skill04",
		text: "React",
		logo: <DiReact size={60} className="m-auto group-hover:text-[#61DBFB]" />,
	},
	{
		id: "skill05",
		text: "TailwindCSS",
		logo: (
			<SiTailwindcss size={60} className="m-auto group-hover:text-[#38bdf8]" />
		),
	},
	{
		id: "skill06",
		text: "ThreeJS",
		logo: (
			<SiThreedotjs size={60} className="m-auto group-hover:text-[#049EF4]" />
		),
	},
	{
		id: "skill07",
		text: "PostgreSQL",
		logo: (
			<DiPostgresql size={60} className="m-auto group-hover:text-[#0064a5]" />
		),
	},
	{
		id: "skill08",
		text: "MongoDB",
		logo: <DiMongodb size={60} className="m-auto group-hover:text-[#00684a]" />,
	},
	{
		id: "skill09",
		text: "Express.js",
		logo: <SiExpress size={60} className="m-auto group-hover:text-[#259dff]" />,
	},
	{
		id: "skill10",
		text: "Vite",
		logo: <SiVite size={60} className="m-auto group-hover:text-[#bd34fe]" />,
	},
	{
		id: "skill11",
		text: "Jest",
		logo: <SiJest size={60} className="m-auto group-hover:text-[#8D485B]" />,
	},
	{
		id: "skill12",
		text: "NPM",
		logo: <DiNpm size={60} className="m-auto group-hover:text-[#CC3534]" />,
	},
	{
		id: "skill13",
		text: "Axios",
		logo: <SiAxios size={60} className="m-auto group-hover:text-[#3b6be3]" />,
	},
	{
		id: "skill14",
		text: "NodeJS",
		logo: (
			<SiNodedotjs size={60} className="m-auto group-hover:text-[#5FA04E]" />
		),
	},
	{
		id: "skill15",
		text: "jQuery",
		logo: <SiJquery size={60} className="m-auto group-hover:text-[#0769AD]" />,
	},
];
