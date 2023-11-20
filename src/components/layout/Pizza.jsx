import React from "react";
import Card from "../UI/Card";
import Image from "next/image";

const Pizza = ({ pizza }) => {
	return (
		<Card className="bg-gray-300 flex flex-col gap-2 hover:bg-gray-500 hover:scale-105 hover:text-white hover:shadow-md hover:shadow-black/50 transition-all">
			<div className="text-center">
				<img
					src={`/${pizza.image}`}
					alt={pizza.name}
					className="max-h-24 max-h-auto block mx-auto"
				/>
			</div>
			<h4 className="font-semibold my-2">{pizza.name}</h4>
			<p className="text-sm ">{pizza.description}</p>
			<button className="px-6 py-2 bg-primary text-white rounded-full">
				Add to Cart ${pizza.amount}
			</button>
		</Card>
	);
};

export default Pizza;
