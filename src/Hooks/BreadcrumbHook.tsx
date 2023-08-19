// import React from 'react';
import { Breadcrumb } from "rsuite";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";

const BreadcrumbComp: React.FC = () => {
	const { pathname } = useLocation();

	return (
		<Breadcrumb>
			<Breadcrumb.Item as={NavLink} to={"/"}>
				Home
			</Breadcrumb.Item>
			<Breadcrumb.Item active>{pathname.split("/")[2]}</Breadcrumb.Item>
		</Breadcrumb>
	);
};
export default BreadcrumbComp;
