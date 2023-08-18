import { useState } from "react";
import React from "react";
import { BiDotsVertical, BiX } from "react-icons/bi";

const Nav = () => {
	const [visibility, setVisibility] = useState(false);

	const navLinks = [
		{ id: 1, text: "Home" },
		{ id: 2, text: "About" },
		{ id: 3, text: "Skills" },
		{ id: 4, text: "Projects" },
		{ id: 5, text: "Contact" },
	];

	const flipVisibility = () => {
		setVisibility(!visibility);
	};

	return (
		<nav
			id="nav"
			className="flex justify-between items-center w-full h-20 text-white  bg-black font-bold fixed"
		>
			<button className="text-3xl ml-1.5 px-16 z-10">MA</button>
			<ul className="hidden md:flex flex-auto text-center text-xl">
				{navLinks.map((link) => {
					return (
						<li
							key={link.id}
							className="cursor-pointer flex-auto px-6 text-white hover:scale-125 duration-300"
						>
							{link.text}
						</li>
					);
				})}
			</ul>
			<button onClick={flipVisibility} className="p-3 md:hidden z-10">
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
								{link.text}
							</li>
						);
					})}
				</ul>
			)}
		</nav>
	);
};

export default Nav;
