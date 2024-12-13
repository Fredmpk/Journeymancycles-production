import Gallery from "./components/gallery";
import About from "./components/about";
import Footer from "./components/footer";
import "./globals.css";
import { sanityFetch } from "@/sanity/live";
import { GALLERY_QUERY, HERO_QUERY, PRODUCTS_QUERY } from "@/sanity/queries";
import { HeroSection } from "./components/hero";
import ProductsSection from "./components/products";
import AwardSection from "./components/award";

export default async function Home() {
  const { data: hero } = await sanityFetch({ query: HERO_QUERY });

  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

  const { data: gallery } = await sanityFetch({ query: GALLERY_QUERY });

  return (
    <>
      <HeroSection mainVideo={hero?.mainVideo || null}></HeroSection>
      <AwardSection></AwardSection>
      <ProductsSection products={products || null}></ProductsSection>
      <Gallery gallery={gallery || null}></Gallery>
      <About></About>
    </>
  );
}
