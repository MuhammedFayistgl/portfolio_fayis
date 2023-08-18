import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Hero: React.FC = () => {
	return (
		<>
			{" "}
			<div id="hero" className="hero route bg-image" >
				<div className="overlay-itro"></div>
				<div className="hero-content display-table">
					<div className="table-cell">
						<div className="container">
							
							<h1 className="hero-title mb-4">I am Muhammed Fayis</h1>
							<p className="hero-subtitle">
								<Typed
									strings={["Designer", "Developer", "Freelancer", "Graphic Designer "]}
									typeSpeed={60}
									backSpeed={50}
									loop
								/>
							</p>
							<p className="pt-3">
								<Link to={'/about'}  className="btn btn-primary btn js-scroll px-4"  role="button">
									Learn More
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
