import React from "react";

import "./heading.scss";

const Heading = ({ mainHeading, subHeading }) => {
	return (
		<div className="section-heading">
			<div className="main-heading">{mainHeading}</div>
			<div className="sub-heading">{subHeading}</div>
		</div>
	);
};

export default Heading;
