import React from "react";
import { projectList } from "../assets/lists/projectList";

const Projects = () => {
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
							<img src={project.image} alt={`${project.title} showcase`}></img>
							<p>{project.text}</p>
							<button className="m-2  bg-black hover:scale-125 duration-300 text-white font-bold p-4 rounded focus:shadow-outline">
								<a target="_blank" rel="external" href={project.code}>
									View Code
								</a>
							</button>
							<button className="m-2  bg-black hover:scale-125 duration-300 text-white font-bold p-4 rounded focus:shadow-outline">
								<a target="_blank" rel="external" href={project.host}>
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
