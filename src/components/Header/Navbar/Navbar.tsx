import React from "react";
// import { Nav } from "rsuite";
import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import ResponsiveNav from '@rsuite/responsive-nav';
const Navbar: React.FC = () => {
	return (
		<>
			<ResponsiveNav appearance="subtle" style={{ marginBottom: 50 }}>
				<ResponsiveNav.Item to="/" as={NavLink} icon={<FcHome />}>
					Home
				</ResponsiveNav.Item>
			<ResponsiveNav.Item to="/about"  as={NavLink}>about  </ResponsiveNav.Item>
				<ResponsiveNav.Item to="/services" as={NavLink}>services</ResponsiveNav.Item>
				<ResponsiveNav.Item to="/work" as={NavLink}>work</ResponsiveNav.Item>
				<ResponsiveNav.Item to="/blog" as={NavLink}>blog</ResponsiveNav.Item>
				<ResponsiveNav.Item to="/contact" as={NavLink}>contact</ResponsiveNav.Item>
			</ResponsiveNav>
		</>
	);
};

export default Navbar;
