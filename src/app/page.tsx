import GallerySection from "./components/gallery";
import Footer from "./components/footer";
import "./globals.css";
import { sanityFetch } from "@/sanity/live";
import {
  ABOUT_QUERY,
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
import AboutSection from "./components/about";

export default async function Home() {
  const { data: hero } = await sanityFetch({ query: HERO_QUERY });

  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

  const { data: gallery } = await sanityFetch({ query: GALLERY_QUERY });

  const { data: impressum } = await sanityFetch({ query: IMPRESSUM_QUERY });

  const { data: friends } = await sanityFetch({ query: FRIENDS_QUERY });

  const { data: about } = await sanityFetch({ query: ABOUT_QUERY });
  console.log("About data:", about);
  return (
    <>
      <HeroSection mainVideo={hero?.mainVideo || null}></HeroSection>
      <AwardSection></AwardSection>
      <ProductsSection products={products || null}></ProductsSection>
      <GallerySection gallery={gallery || null}></GallerySection>
      <AboutSection about={about || null}></AboutSection>
      <FriendSection friends={friends || null}></FriendSection>
      <Footer impressum={impressum || null} />
    </>
  );
}
