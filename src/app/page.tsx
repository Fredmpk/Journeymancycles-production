import Image from "next/image";
import Hero from "./components/hero";
import Products from "./components/products";
import Gallery from "./components/gallery";
import About from "./components/about";
import Footer from "./components/footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Products></Products>
      <Gallery></Gallery>
      <About></About>
    </>
  );
}
