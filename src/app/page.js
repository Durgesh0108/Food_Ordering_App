// import Image from 'next/image'

import HomeMenu from "@/components/HomeMenu";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<HomeMenu />
			<section className="text-center my-16">
				<SectionHeaders
					subHeader={"Our Story"}
					mainHeader={"About Us"}
				/>
				<div className="max-w-lg flex flex-col gap-4 mx-auto mt-4 text-gray-500">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Nulla animi eveniet facere reiciendis amet
						deserunt distinctio tempora necessitatibus neque autem
						libero corporis, eum accusamus nesciunt vero dolorem
						iste consectetur minima!
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Nulla animi eveniet facere reiciendis amet
						deserunt distinctio tempora necessitatibus neque autem
						libero corporis, eum accusamus nesciunt vero dolorem
						iste consectetur minima!
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Nulla animi eveniet facere reiciendis amet
						deserunt distinctio
					</p>
				</div>
			</section>
			<section className="text-center my-8">
				<SectionHeaders
					subHeader={"Don't Hesitate"}
					mainHeader={"Contact Us"}
				/>
				<div className="my-8">
					<a
						href="tel:+919653320535"
						className="text-2xl underline text-gray-500"
					>
						+91 96533 20535
					</a>
				</div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500">
        &copy; 2023 All Right Reserved
      </footer>
		</>
	);
}
