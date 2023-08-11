import React from "react";

import "../header.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	const [togleClass, setTogleClass] = React.useState(false);

	type setTogleClass = React.Dispatch<React.SetStateAction<string>>;
	type togleClass = boolean;

	return (
		<>
			<nav  onClick={() => {setTogleClass(!togleClass)}} id="navbar"  className={!togleClass ? "navbar  " : "navbar navbar-mobile"}>
				<ul>
					<li>
						<Link className="nav-link scrollto active" to={"/"}>
							Home
						</Link>
					</li>
					<li>
						<Link className="nav-link scrollto" to={"/About"}>
							About
						</Link>
					</li>
					<li>
						<Link className="nav-link scrollto" to={"/Services"}>
							Services
						</Link>
					</li>
					<li>
						<Link className="nav-link scrollto " to={"/work"}>
							Work
						</Link>
					</li>
					<li>
						<Link className="nav-link scrollto " to={"/blog"}>
							Blog
						</Link>
					</li>
					{/* <li className="dropdown">
						<Link to={"/"}>
							<span>Drop Down</span> <i className="bi bi-chevron-down"></i>
						</Link>
						<ul>
							<li>
								<a href="#">Drop Down 1</a>
							</li>
							<li className="dropdown">
								<a href="#">
									<span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i>
								</a>
								<ul>
									<li>
										<a href="#">Deep Drop Down 1</a>
									</li>
									<li>
										<a href="#">Deep Drop Down 2</a>
									</li>
									<li>
										<a href="#">Deep Drop Down 3</a>
									</li>
									<li>
										<a href="#">Deep Drop Down 4</a>
									</li>
									<li>
										<a href="#">Deep Drop Down 5</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Drop Down 2</a>
							</li>
							<li>
								<a href="#">Drop Down 3</a>
							</li>
							<li>
								<a href="#">Drop Down 4</a>
							</li>
						</ul>
					</li> */}
					<li>
						<Link className="nav-link scrollto" to={"/Contact"}>
							Contact
						</Link>
					</li>
				</ul>
				<i
					className={!togleClass ? "bi bi-list mobile-nav-toggle " : 'bi bi-list mobile-nav-toggle bi-x'}
					onClick={() => {
						setTogleClass(!togleClass);
					}}
				></i>
			</nav>
		</>
	);
};

export default Navbar;
