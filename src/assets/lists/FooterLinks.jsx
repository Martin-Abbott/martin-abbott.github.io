import { ImGithub, ImLinkedin } from "react-icons/im";

export const FooterLinks = [
	{
		id: "footer1",
		text: "LinkedIn",
		logo: <ImLinkedin size={25} className="block m-auto" />,
		url: "https://www.linkedin.com/in/martin-abbott-bsc/",
	},
	{
		id: "footer2",
		text: "GitHub",
		logo: <ImGithub size={25} className="block m-auto" />,
		url: "https://github.com/Martin-Abbott",
	},
];
