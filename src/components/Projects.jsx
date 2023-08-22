import React from "react";
import quote from "../assets/quote.png";
import feBoardgame from "../assets/fe-boardgame.png";
import beBoardgame from "../assets/be-boardgame.png";

const Projects = () => {
	const projectList = [
		{
			id: "project01",
			title: "Quote Randomiser",
			text: "A fun quote randomising mini-app built with jQuery on CodePen",
			image: quote,
			host: "https://codepen.io/Martin-Abbott/full/dyQjWyR",
			code: "https://codepen.io/Martin-Abbott/pen/dyQjWyR",
		},
		{
			id: "project02",
			title: "Bizarre Boardgame Bazaar",
			text: "A react boardgame review site, paired with a custom API and server",
			image: feBoardgame,
			host: "https://bizarre-boardgame-bazaar.netlify.app/",
			code: "https://github.com/Martin-Abbott/MA-FE-NC-GAMES",
		},
		{
			id: "project03",
			title: "Boardgame Review Database & Server",
			text: "A PSQL database and express server for the 'Bizarre Boardgame Bazaar'",
			image: beBoardgame,
			host: "https://games-review-database-server.onrender.com/api/",
			code: "https://github.com/Martin-Abbott/MA-BE-NC-GAMES",
		},
	];

	return (
		<section id="Projects" className="text-center my-20 min-h-[80vh]">
			<h2 className="text-5xl font-bold p-4">Projects</h2>
			<p className="text-base p-2">
				Check out some of the projects I've been working on
			</p>
			<ul className="flex flex-wrap self-center text-center justify-around text-l max-w-[90vw] px-8 m-auto">
				{projectList.map((project) => {
					return (
						<li
							key={project.id}
							className="p-2 min-w-[120px] border rounded-xl m-2"
						>
							<h3 className="text-2xl font-bold">{project.title}</h3>
							<img
								src={project.image}
								alt={(project.title += " showcase")}
							></img>
							<p>{project.text}</p>
							<button className="m-2  bg-black hover:scale-125 duration-300 text-white font-bold p-4 rounded focus:shadow-outline">
								<a target="_blank" href={project.code}>
									View Code
								</a>
							</button>
							<button className="m-2  bg-black hover:scale-125 duration-300 text-white font-bold p-4 rounded focus:shadow-outline">
								<a target="_blank" href={project.host}>
									View Demo
								</a>
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Projects;
