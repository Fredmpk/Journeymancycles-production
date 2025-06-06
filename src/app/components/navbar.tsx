import React from "react";
import { BurgerMenu } from "./burger-menu";
import Link from "next/link";
import { TfiInstagram } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

export function Navbar() {
  return (
    <div className="fixed w-full bg-white opacity-90 shadow-md z-50 ">
      <nav className="flex items-center justify-between align-items text-lg md:text-2xl tracking-wide h-16 sm:h-20 px-3 max-w-screen overflow-hidden">
        <a
          href="https://www.instagram.com/journeyman.cycles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-3xl sm:text-4xl" />
        </a>

        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 aspect-square  h-10 sm:h-12 "
        >
          <img src="/img/erdmannlogo.png"></img>
        </Link>

        <ul
          className="items-center gap-4 lg:gap-9 hidden md:flex"
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
        </ul>
        <BurgerMenu />
      </nav>
    </div>
  );
}
