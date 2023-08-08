import React from "react";
// import { Nav } from "rsuite";
import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import ResponsiveNav from "@rsuite/responsive-nav";
const Navbar: React.FC = () => {
	const [active, setActive] = React.useState("Home")

	type setActive =  React.Dispatch<React.SetStateAction<string>>
	type active = string

	return (
		<>
			<ResponsiveNav  onSelect={setActive} activeKey={active}   appearance="subtle" style={{ marginBottom: 50 }}>
				<ResponsiveNav.Item to="/" as={NavLink} eventKey={"Home"} icon={<FcHome />}>
					Home
				</ResponsiveNav.Item>
				<ResponsiveNav.Item to="/about" eventKey={"about"} as={NavLink}>
					about{" "}
				</ResponsiveNav.Item>
				<ResponsiveNav.Item to="/services" eventKey={"services"} as={NavLink}>
					services
				</ResponsiveNav.Item>
				<ResponsiveNav.Item to="/work" eventKey={"work"} as={NavLink}>
					work
				</ResponsiveNav.Item>
				<ResponsiveNav.Item to="/blog" eventKey={"blog"} as={NavLink}>
					blog
				</ResponsiveNav.Item>
				<ResponsiveNav.Item to="/contact" eventKey={"contact"} as={NavLink}>
					contact
				</ResponsiveNav.Item>
			</ResponsiveNav>
		</>
	);
};

export default Navbar;
