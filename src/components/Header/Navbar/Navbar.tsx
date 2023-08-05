import React from "react";
import { Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
// import {FcHome} from 'react-icons/fc'
const Navbar: React.FC = () => {
	return (
		<>
			<Nav  appearance="subtle" style={{ marginBottom: 50 }}>
				<Nav.Item eventKey="home" icon={<HomeIcon />}>
					Home
				</Nav.Item>
				<Nav.Item eventKey="news">News</Nav.Item>
				<Nav.Item eventKey="solutions">Solutions</Nav.Item>
				<Nav.Item eventKey="products">Products</Nav.Item>
				<Nav.Item eventKey="about">About</Nav.Item>
			</Nav>
		</>
	);
};

export default Navbar;
