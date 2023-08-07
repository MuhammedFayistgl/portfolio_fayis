import React from "react";
import Navbar from "./Navbar/Navbar";
import "./header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<>
			<header id="header" className="fixed-top">
				<div className="container d-flex  justify-content-between">
					<h1 className="logo " style={{ lineHeight: -1 }}>
						<Link className="myLogo" to={"/"}>
							DevFolio
						</Link>
					</h1>
					{/* <!-- Uncomment below if you prefer to use an image logo --> */}
					<a href="index.html" className="logo">
						<img src="assets/img/logo.png" alt="" className="img-fluid" />
					</a>
					<Navbar /> {/* <!-- .navbar --> */}
				</div>
			</header>
		</>
	);
};

export default Header;
