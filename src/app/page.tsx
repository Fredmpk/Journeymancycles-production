import Image from "next/image";
import Products from "./components/products";
import Gallery from "./components/gallery";
import About from "./components/about";
import Footer from "./components/footer";
import "./globals.css";
import { sanityFetch } from "@/sanity/live";
import { HERO_QUERY } from "@/sanity/queries";
import { HeroSection } from "./components/hero";

export default async function Home() {
  const { data: hero } = await sanityFetch({ query: HERO_QUERY });

  return (
    <>
      <HeroSection mainVideo={hero?.mainVideo || null}></HeroSection>
      <Products></Products>
      <Gallery></Gallery>
      <About></About>
    </>
  );
}
