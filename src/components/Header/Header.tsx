import React from "react";
import Navbar from "./Navbar/Navbar";
import "./header.css";
const Header: React.FC = () => {
	return (
		<>
			<header id="header" className="fixed-top">
				<div className="container d-flex  justify-content-between">
					<h1 className="logo " style={{ lineHeight: -1 }}>
						<a className="myLogo" href="index.html">
							DevFolio
						</a>
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
