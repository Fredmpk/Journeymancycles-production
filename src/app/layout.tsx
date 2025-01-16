import type { Metadata } from "next";
import Footer from "./components/footer";

import "./globals.css";
import { SanityLive } from "@/sanity/live";
import { Navbar } from "./components/navbar";
import { Anton, Dancing_Script, Goldman } from "next/font/google";

const goldman = Goldman({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Journeyman Cycles",
  description: "Your local Cargo bike manufacturer",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={goldman.className}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <SanityLive />
      </body>
    </html>
  );
}
