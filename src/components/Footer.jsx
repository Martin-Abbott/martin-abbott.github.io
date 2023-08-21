import React from "react";
import { ImGithub, ImLinkedin } from "react-icons/im";

const Footer = () => {
	const footerLinks = [
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

	return (
		<footer
			id="footer"
			className="flex justify-around items-center w-full h-16 text-white  bg-black font-bold fixed bottom-0 text-center"
		>
			{footerLinks.map((link) => {
				return (
					<a
						target="_blank"
						rel="external"
						href={link.url}
						className="text-xs  hover:scale-125 duration-300 p-2 justify-center"
					>
						{link.logo}
						{link.text}
					</a>
				);
			})}
		</footer>
	);
};

export default Footer;
