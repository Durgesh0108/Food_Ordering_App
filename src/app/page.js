// import Image from 'next/image'

import HomeMenu from "@/components/HomeMenu";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";



export default function Home() {
	return (
    <>
      <Header />
      <Hero />
      <HomeMenu/>
    </>
	);
}
