import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import AgApp from "./pages/agapp";
import Certifications from "./pages/certifications";
import IyoyoFoods from "./pages/iyoyofoods";
import Mhat from "./pages/mhat";
import PlutoAi from "./pages/plutoai";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/certifications" element={<Certifications/>} />
				<Route path="/agapp" element={<AgApp />} />
				<Route path="/iyoyofoods" element={<IyoyoFoods />} />
				<Route path="/mhat" element={<Mhat />} />
				<Route path="/plutoai" element={<PlutoAi />} />

				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
