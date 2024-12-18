import { FaAward } from "react-icons/fa";
import { IoArrowRedoCircle } from "react-icons/io5";
export default function AwardSection() {
  return (
    <div className="bg-zinc-100">
      <div className="relative flex flex-col items-center">
        <FaAward className="absolute right-[5vw] top-[9vw] sm:top-[5vw] text-3xl sm:text-6xl" />
        <p className="p-[3vw] md:text-2xl lg:text-4xl">
          {" "}
          2023 "Best Cargo Bike" Award @
        </p>
        <a
          href="https://www.bespoked.cc/post/bespoked-2023-award-winners"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/bespoked.png"
            alt="Bespoked Messe"
            className="w-[30vw]"
          />
        </a>
      </div>
      <div className="flex flex-row justify-between items-center p-[2vw]">
        <img
          src="img/award-grey.jpg"
          alt="EIn Bild des Preises"
          className="w-1/4 rounded-full"
        />
        <a
          href="https://www.bespoked.cc/post/bespoked-2023-award-winners"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className=" w-[70vw] sm:w-[60vw] rounded-xl -rotate-2"
            src="/img/review-award.png"
            alt="Best Cargo Bike - Journeyman Cycles   
          Judged by Jon from TwoTone Consulting and Bregan from Crank Communcations – Very versatile loading platform, capable of carrying very long cargo. So ultimately, one is for the most utility, you need to carry something super long, long timber, long pipes, stuff like that. Has a cool steering approach, different than just the typical ball joint bearing. And also has extra ways to attach things on the bottom of the bike.   
          Runners Up – Fahrradbau Stolz, Drust Cycles, Veloheld"
          />
        </a>
      </div>
      <div className="flex justify-end">
        <a
          href="https://www.youtube.com/watch?v=an1yIQyBUQg&t=32s"
          className="hover:text-red-500 text-lg p-[2vw] mr-[4vw]
          flex gap-2 items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Video-Interview auf der Bespoked Messe ab 5:33</p>
          <IoArrowRedoCircle />
        </a>
      </div>
    </div>
  );
}
