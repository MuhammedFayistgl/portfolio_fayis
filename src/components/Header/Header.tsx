import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./header.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Header: React.FC = () => {
	
	const [currentURL] = useState( window.location.pathname)


	
	return (
		<>
			<header id="header" className={ currentURL=="/"  ? "fixed-top " : 'fixed-top header-scrolled'}>
				<div className="container d-flex align-items-center justify-content-between">
					<h1 className="logo">
						<Link to={'/'} >DevFolio</Link>
					</h1>

					<Link to={'/'}  className="logo">
						<img src="assets/img/logo.png" alt="" className="img-fluid" />
					</Link>

					<Navbar/>
				</div>
			</header>
		</>
	);
};

export default Header;
