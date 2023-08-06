import React, { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
// const Header = lazy(() => import("./components/Header/Header"));
import { Routes, Route } from "react-router-dom";
import About from "./components/Main/About Section/About";
import Services from "./components/Main/Services Section/Services";
import Portfolio from "./components/Main/Portfolio Section/Portfolio";
import Blog from "./components/Main/Blog Section/Blog";
import Contact from "./components/Main/Contact Section/Contact";
const App: React.FunctionComponent = () => {
	// "background-image: url(assets/img/hero-bg.jpg)"
	return (
		<Suspense fallback={"loading"}>
			<Header />
			<Routes>
				<Route
					path={"/"}
					element={
						<>
							<Hero />
							<Main />
						</>
					}
				/>
				<Route path={"/about"} element={<About />} />
				<Route path={"/services"} element={<Services />} />
				<Route path={"/work"} element={<Portfolio />} />
				<Route path={"/blog"} element={<Blog />} />
				<Route path={"/contact"} element={<Contact />} />
			</Routes>
		</Suspense>
	);
};

export default App;
