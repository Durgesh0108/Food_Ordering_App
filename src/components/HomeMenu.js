import Image from "next/image";
import React from "react";
import Pizzas from "./layout/Pizzas";

const HomeMenu = () => {
	return (
		<section className="my-4">
			<div className="flex flex-row justify-between items-center">
				<div className="relative">
					<div className="w-[180px] h-[100px]">
						<Image
							src={"/full_salad.png"}
							layout={"fill"}
							objectFit={"contain"}
							alt={"salad"}
							// className="w-[109px] h-[189px]"
						/>
					</div>
				</div>

				<div className="text-center">
					<h3 className="uppercase leading-4 text-gray-500 font-semibold">
						Check Out
					</h3>
					<h2 className="text-primary font-bold text-4xl italic">
						Menu
					</h2>
				</div>
				<div className="relative">
					<div className="w-[180px] h-[100px]">
						<Image
							src={"/full_salad.png"}
							layout={"fill"}
							objectFit={"contain"}
							alt={"salad"}
							// className="w-[109px] h-[189px]"
						/>
					</div>
				</div>
			</div>
			<Pizzas />
		</section>
	);
};

export default HomeMenu;
