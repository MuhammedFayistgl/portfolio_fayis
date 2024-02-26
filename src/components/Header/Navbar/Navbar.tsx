import React from "react";

import "../header.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	const [togleClass, setTogleClass] = React.useState(false);
	const [activeURL, setactiveURL] = React.useState(location.hash.split("/")[1]);


	type setactiveURL = React.Dispatch<React.SetStateAction<string>>;
	type setTogleClass = React.Dispatch<React.SetStateAction<string>>;
	type togleClass = boolean;
	type activeURL = string;
	const navData = [
		{
			id: 15625977,
			field: "Home",
			to: "/",
		},
		{
			id: 2556259777,
			field: "About",
			to: "/About",
		},
		{
			id: 3562597757,
			field: "Services",
			to: "/Services",
		},
		{
			id: 4556259777,
			field: "Projects",
			to: "/Work",
		},
		{
			id: 5562597757,
			field: "Blog",
			to: "/Blog",
		},
		
		
		{
			id: 6556259777,
			field: "Sigin",
			to: "/Sigin",
		},
		{
			id: 6556259777,
			field: "Login",
			to: "/Login",
		},
	];

	return (
		<>
			<nav id="navbar" className={!togleClass ? "navbar  " : "navbar navbar-mobile"}>
				<ul>
					{navData?.map((navData) => {
						return (
							<li key={navData?.id}>
								<Link
									onClick={() => {setactiveURL(navData.field)
										togleClass && setTogleClass(!togleClass);
									}}
									className={` nav-link scrollto ${activeURL === navData?.field && ` active`}  `}
									to={navData?.to}
								>
									{navData?.field}
								</Link>
							</li>
						);
					})}
				</ul>
				<i
					className={!togleClass ? "bi bi-list mobile-nav-toggle " : "bi bi-list mobile-nav-toggle bi-x"}
					onClick={() => {
						setTogleClass(!togleClass);
					}}
				></i>
			</nav>
		</>
	);
};

export default Navbar;
