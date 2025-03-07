import type { Metadata } from "next";
import Footer from "./components/footer";

import "./globals.css";
import { sanityFetch, SanityLive } from "@/sanity/live";
import { Navbar } from "./components/navbar";
import { Anton, Dancing_Script, Goldman } from "next/font/google";
import { IMPRESSUM_QUERY } from "@/sanity/queries";

const goldman = Goldman({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Journeyman Cycles",
  icons: { icon: "/img/erdmannlogo.png", apple: "/img/erdmannlogo.png" },
  description: "Your local Cargo bike manufacturer",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: impressum } = await sanityFetch({ query: IMPRESSUM_QUERY });
  return (
    <html lang="de">
      <body className={goldman.className}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer impressum={impressum}></Footer>
        <SanityLive />
      </body>
    </html>
  );
}
