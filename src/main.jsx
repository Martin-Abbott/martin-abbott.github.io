import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log("Hello fellow developer, ");
console.log("It's lovely to see you here, ");
console.log("I hope you enjoy your stay!");

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
