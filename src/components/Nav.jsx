import { useState } from "react";
import { BiDotsVertical, BiX } from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {
	const [visibility, setVisibility] = useState(false);

	const navLinks = [
		{ id: "nav1", text: "Home" },
		{ id: "nav2", text: "Skills" },
		{ id: "nav3", text: "About" },
		{ id: "nav4", text: "Projects" },
		{ id: "nav5", text: "Contact" },
	];

	const flipVisibility = () => {
		setVisibility(!visibility);
	};

	return (
		<nav
			id="nav"
			className="flex justify-between items-center w-full h-16 text-white  bg-black font-bold fixed top-0 z-10"
		>
			<button className="text-3xl ml-1.5 px-16 hover:scale-125 duration-300">
				<Link to="Home" offset={-80} smooth delay={100} duration={300}>
					MA
				</Link>
			</button>
			<ul className="hidden md:flex flex-auto text-center text-xl">
				{navLinks.map((link) => {
					return (
						<li
							key={link.id}
							className="cursor-pointer flex-auto px-6 text-white hover:scale-125 duration-300"
						>
							<Link
								to={link.text}
								offset={-80}
								smooth
								delay={100}
								duration={300}
							>
								{link.text}
							</Link>
						</li>
					);
				})}
			</ul>
			<button
				onClick={flipVisibility}
				className="p-3 md:hidden z-10  hover:scale-125 duration-300"
			>
				{visibility ? <BiX size={35} /> : <BiDotsVertical size={35} />}
			</button>
			{visibility && (
				<ul className="flex flex-col py-24 items-center absolute top-0 left-0 w-full h-screen bg-black md:hidden text-2xl">
					{navLinks.map((link) => {
						return (
							<li
								key={link.id}
								className="flex place-content-center items-center cursor-pointer border rounded-3xl m-2 p-4 flex-auto text-white w-6/12 hover:scale-125 duration-300"
							>
								<Link
									to={link.text}
									offset={-80}
									onClick={flipVisibility}
									smooth
									delay={100}
									duration={300}
								>
									{link.text}
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</nav>
	);
};

export default Nav;
