"use client";
import { FaAward } from "react-icons/fa";
import { IoArrowRedoCircle } from "react-icons/io5";
import { Inter } from "next/font/google";
import { useRef } from "react";
import { useInView } from "motion/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
export default function AwardSection() {
  const AwardIconRef = useRef(null);
  const AwardFigureRef = useRef(null);
  const AwardTextRef = useRef(null);
  const isAwardIconInView = useInView(AwardIconRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <div className="bg-zinc-100">
      <div className="relative flex flex-col items-center">
        <div ref={AwardIconRef}>
          <FaAward
            style={{
              transform: isAwardIconInView ? "none" : "translateX(450%)",
              opacity: isAwardIconInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="absolute right-[5vw] top-[9vw] sm:top-[5vw] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          />
        </div>
        <div className="p-[3vw] md:text-2xl lg:text-4xl flex gap-[1vw] tracking-wider">
          <p> Best Cargo Bike </p>
          <p> Award @</p>
        </div>
        <a
          href="https://www.bespoked.cc/post/bespoked-2023-award-winners"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-[2vw] items-center"
        >
          <img
            src="/img/BESPOKED.png"
            alt="Bespoked Messe"
            className="w-[30vw]"
          />
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl">
            2023
          </p>
        </a>
      </div>
      <div className="flex flex-row justify-between items-center p-[4vw]">
        <img
          ref={AwardFigureRef}
          src="img/award-grey.png"
          alt="EIn Bild des Preises"
          style={{
            transform: isAwardIconInView ? "none" : "translateX(-350%)",
            opacity: isAwardIconInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="w-1/4"
        />
        <a
          href="https://www.bespoked.cc/post/bespoked-2023-award-winners"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-wide"
          ref={AwardTextRef}
          style={{
            transform: isAwardIconInView ? "none" : "translateX(200%)",
            opacity: isAwardIconInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img
            className=" w-[70vw] sm:w-[60vw] rounded-xl -rotate-2 hidden md:block"
            src="/img/review-award.png"
            alt="Best Cargo Bike - Journeyman Cycles   
          Judged by Jon from TwoTone Consulting and Bregan from Crank Communcations – Very versatile loading platform, capable of carrying very long cargo. So ultimately, one is for the most utility, you need to carry something super long, long timber, long pipes, stuff like that. Has a cool steering approach, different than just the typical ball joint bearing. And also has extra ways to attach things on the bottom of the bike."
          />
          <div
            className={`-rotate-2 italic px-[6vw] py-[2vw] md:hidden ${inter.className}`}
          >
            "Very versatile loading platform, capable of carrying very long
            cargo. So ultimately, one is for the most utility, you need to carry
            something super long, long timber, long pipes, stuff like that. Has
            a cool steering approach, different than just the typical ball joint
            bearing."{" "}
          </div>
        </a>
      </div>
      <div className="flex justify-end">
        <a
          href="https://youtu.be/an1yIQyBUQg?t=332"
          className="hover:text-red-500 text-lg p-[2vw] mr-[4vw]
          flex gap-2 items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xs md:text-lg">
            Video-Interview auf der Bespoked Messe
          </p>
          <IoArrowRedoCircle />
        </a>
      </div>
    </div>
  );
}
