import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex justify-between items-center py-2">
			<a href="" className="text-primary font-semibold text-4xl">
				Pizza
			</a>
			<nav className="flex gap-8 font-semibold text-gray-500 items-center">
				<Link href={""}>Home</Link>
				<Link href={""}>Menu</Link>
				<Link href={""}>About</Link>
				<Link href={""}>Contact</Link>
			</nav>
			<nav className="flex items-center gap-4 text-gray-500 font-semibold">
				<Link href={""}>Login</Link>
				<Link
					href={""}
					className="bg-primary rounded-full text-white px-4 py-2"
				>
					Register
				</Link>
			</nav>
		</header>
	);
};

export default Header;
