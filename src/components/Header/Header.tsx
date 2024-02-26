import React from "react";
import Navbar from "./Navbar/Navbar";
import "./header.css";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
	
	


	
	return (
		<div>
			<header id="header" className={'fixed-top header-scrolled'}>
				<div className="container d-flex align-items-center justify-content-between">
					<h1 className="logo">
						<Link to={'/'} >fayis_elm</Link>
					</h1>

					<Link to={'/'}  className="logo">
						<img src="" alt="" className="img-fluid" />
					</Link>

					<Navbar/>
				</div>
			</header>
		</div>
	);
};

export default Header;
