import Gallery from "./components/gallery";
import About from "./components/about";
import Footer from "./components/footer";
import "./globals.css";
import { sanityFetch } from "@/sanity/live";
import {
  FRIENDS_QUERY,
  GALLERY_QUERY,
  HERO_QUERY,
  IMPRESSUM_QUERY,
  PRODUCTS_QUERY,
} from "@/sanity/queries";
import { HeroSection } from "./components/hero";
import ProductsSection from "./components/products";
import AwardSection from "./components/award";
import FriendSection from "./components/friends";

export default async function Home() {
  const { data: hero } = await sanityFetch({ query: HERO_QUERY });

  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

  const { data: gallery } = await sanityFetch({ query: GALLERY_QUERY });

  const { data: impressum } = await sanityFetch({ query: IMPRESSUM_QUERY });

  const { data: friends } = await sanityFetch({ query: FRIENDS_QUERY });

  return (
    <>
      <HeroSection mainVideo={hero?.mainVideo || null}></HeroSection>
      <AwardSection></AwardSection>
      <ProductsSection products={products || null}></ProductsSection>
      <Gallery gallery={gallery || null}></Gallery>
      <About></About>
      <FriendSection friends={friends || null}></FriendSection>
      <Footer impressum={impressum || null} />
    </>
  );
}
