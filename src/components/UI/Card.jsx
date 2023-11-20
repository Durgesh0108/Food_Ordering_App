import React from "react";

const Card = (props) => {
	return (
		<div className={`p-4 rounded-lg ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;
