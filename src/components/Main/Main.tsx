import React, { lazy } from "react";
const About = lazy(() => import("./About Section/About"));
const Services = lazy(() => import("./Services Section/Services"));
const Counter = lazy(() => import("./Counter Section/Counter"));
const Portfolio = lazy(() => import("./Portfolio Section/Portfolio"));
const Testimonials = lazy(() => import("./Testimonials Section/Testimonials"));
const Blog = lazy(() => import("./Blog Section/Blog"));
const Contact = lazy(() => import("./Contact Section/Contact"));

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
