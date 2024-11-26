import React from "react";
import { BurgerMenu } from "./burger-menu";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="fixed w-full bg-white opacity-90 shadow-md z-50">
      <nav className="flex items-center justify-between align-items text-lg md:text-2xl tracking-wide m-[4vw] md:m-[3vw] h-[3vw] md:h-[1vw] ">
        <div
          className=" relative aspect-square  h-[8vw] md:h-[5vw]
           m-3
          "
        >
          <img src="/erdmannlogo.png"></img>
        </div>
        <div className="flex items-center">
          <Link href="/" className="">
            Journeymancycles
          </Link>
        </div>
        <ul
          className="items-center gap-4 md:gap-9 hidden md:flex"
          id="navbar__right"
        >
          <li>
            <Link href="/#products">Die Modelle</Link>
          </li>
          <li>
            <Link href="/#gallery">Galerie</Link>
          </li>

          <li>
            <Link href="/#about">About</Link>
          </li>
          {/* <li>
            <a href="#">kontakt</a>
          </li> */}
        </ul>
        <BurgerMenu />
      </nav>
    </div>
  );
}
