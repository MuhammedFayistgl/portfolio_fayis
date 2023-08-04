import React, { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
// import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
// const Header = lazy(() => import("./components/Header/Header"));

const App: React.FunctionComponent = () => {
	// "background-image: url(assets/img/hero-bg.jpg)"
	return (
		<Suspense fallback={"loading"}>
			<Header />
			<Hero />
			{/* <Main /> */}
		</Suspense>
	);
};

export default App;
