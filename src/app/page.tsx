import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import Carousel from "./components/Carousel";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Subscribe />
      <Carousel />
      <Footer />
      <Copyright />
    </>
  );
}
