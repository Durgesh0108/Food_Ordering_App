import Image from "next/image";
import React from "react";
import Right_arrow from "./icons/right_arrow";

const Hero = () => {
	return (
		<section className="grid grid-cols-2 herp">
			<div className="flex flex-col gap-2 py-12">
				<h1 className="text-4xl font-semibold">
					Everything <br />
					is Better <br />
					with a <span className="text-primary">Pizza</span>
				</h1>
				<p className="my-6 text-gray-600 text-sm">
					Pizza is the missing piece that makes every day complete, a
					simple yet delicious joy in life
				</p>
				<div className="flex gap-4">
					<button className="flex gap-2 uppercase items-center bg-primary px-4 py-2 text-white rounded-full">
						Order Now
						<Right_arrow />
					</button>
					<button className="flex gap-2 items-center  px-4 py-2 text-gray-600 font-semibold">
						Learn More <Right_arrow />
					</button>
				</div>
			</div>
			<div className="relative">
				<Image
					src={"/pizza.png"}
					layout={"fill"}
					objectFit={"contain"}
					alt={"pizza"}
				/>
			</div>
		</section>
	);
};

export default Hero;
