import React from "react";
import { BurgerMenu } from "./burger-menu";
import Link from "next/link";
import { TfiInstagram } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

export function Navbar() {
  return (
    <div className="fixed w-full bg-white opacity-90 shadow-md z-50">
      <nav className="flex items-center justify-between align-items text-lg md:text-2xl tracking-wide m-[4vw] md:m-[3vw] h-[3vw] md:h-[1vw] ">
        <a href="https://www.instagram.com/journeyman.cycles/">
          <FaInstagram className="text-[4vw]" />
        </a>
        <div
          className="relative -1/2 aspect-square  h-[8vw] md:h-[5vw]
           
          "
        ></div>
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 aspect-square  h-[8vw] md:h-[5vw]"
        >
          <img src="/img/erdmannlogo.png"></img>
        </Link>

        <ul
          className="items-center gap-4 md:gap-9 hidden lg:flex"
          id="navbar__right"
        >
          <li>
            <Link href="/#products">Modelle</Link>
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
