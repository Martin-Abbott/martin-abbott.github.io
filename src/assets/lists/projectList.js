import solar from "../images/solar-system.png";
import quote from "../images/quote.png";
import feBoardgame from "../images/fe-boardgame.png";
import beBoardgame from "../images/be-boardgame.png";

export const projectList = [
	{
		id: "project01",
		title: "Solar System Diorama",
		text: "An interactive 3D solar system diorama, built with JavaScript and Three.js",
		image: solar,
		host: "https://martin-abbott.dev/Solar-System/",
		code: "https://github.com/Martin-Abbott/Solar-System",
	},
	{
		id: "project02",
		title: "Quote & Colour Randomiser",
		text: "A fun quote & colour randomising mini-app built with jQuery on CodePen",
		image: quote,
		host: "https://codepen.io/Martin-Abbott/full/dyQjWyR",
		code: "https://codepen.io/Martin-Abbott/pen/dyQjWyR",
	},
	{
		id: "project03",
		title: "Bizarre Boardgame Bazaar",
		text: "A react boardgame review site, paired with a custom API and server",
		image: feBoardgame,
		host: "https://bizarre-boardgame-bazaar.netlify.app/",
		code: "https://github.com/Martin-Abbott/MA-FE-NC-GAMES",
	},
	{
		id: "project04",
		title: "Boardgame Review Database & Server",
		text: "A PSQL database and express server for the 'Bizarre Boardgame Bazaar'",
		image: beBoardgame,
		host: "https://games-review-database-server.onrender.com/api/",
		code: "https://github.com/Martin-Abbott/MA-BE-NC-GAMES",
	},
];
