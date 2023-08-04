import React from "react";
import About from "./About Section/About";
import Services from "./Services Section/Services";
import Counter from "./Counter Section/Counter";
import Portfolio from "./Portfolio Section/Portfolio";
import Testimonials from "./Testimonials Section/Testimonials";
import Blog from "./Blog Section/Blog";
import Contact from "./Contact Section/Contact";

const Main: React.FC = () => {
	return (
		<>
			<About />
			<Services />
			<Counter />
			<Portfolio />
			<Testimonials />
			<Blog />
			<Contact />
		</>
	);
};

export default Main;
