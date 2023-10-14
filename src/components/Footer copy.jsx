import { FooterLinks } from "../assets/lists/FooterLinks";

const Footer = () => {
	return (
		<footer
			id="Footer"
			className="flex justify-around items-center w-full h-16 text-white  bg-black font-bold fixed bottom-0 text-center"
		>
			{FooterLinks.map((link) => {
				return (
					<a
						key={link.id}
						target="_blank"
						rel="noreferrer"
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
