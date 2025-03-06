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

  const { data: friends } = await sanityFetch({ query: FRIENDS_QUERY });

  const { data: about } = await sanityFetch({ query: ABOUT_QUERY });
  console.log("hero data:", hero);
  return (
    <>
      <section className="overflow-hidden">
        <HeroSection hero={hero || null}></HeroSection>
      </section>
      <section className="overflow-hidden">
        <AwardSection></AwardSection>
      </section>
      <section>
        <ProductsSection products={products || null}></ProductsSection>
      </section>
      <section>
        <GallerySection gallery={gallery || null}></GallerySection>
      </section>
      <section className="overflow-hidden">
        <AboutSection about={about || null}></AboutSection>
      </section>
      <section>
        <FriendSection friends={friends || null}></FriendSection>
      </section>
    </>
  );
}
