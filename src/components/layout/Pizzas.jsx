import React from "react";
import Pizza from "./Pizza";

const PIZZA_DATA = [
	{
		id: 1,
		name: "Pepperoni Pizza",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem!",
		amount: 12,
		image: "pizza.png",
	},
	{
		id: 2,
		name: "Pepperoni Pizza",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem!",
		amount: 12,
		image: "pizza.png",
	},
	{
		id: 3,
		name: "Pepperoni Pizza",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem!",
		amount: 12,
		image: "pizza.png",
	},
	{
		id: 4,
		name: "Pepperoni Pizza",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem!",
		amount: 12,
		image: "pizza.png",
	},
	{
		id: 5,
		name: "Pepperoni Pizza",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem!",
		amount: 12,
		image: "pizza.png",
	},
	{
		id: 6,
		name: "Pepperoni Pizza",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem!",
		amount: 12,
		image: "pizza.png",
	},
];

const Pizzas = () => {
	return (
		<div className="grid grid-cols-3 gap-4 text-center">
			{PIZZA_DATA.map((data) => (
				<Pizza pizza={...data} key={data.id}/>
			))}
		</div>
	);
};

export default Pizzas;
