"use client";
import { client } from "@/sanity/client";
import { useEffect, useState } from "react";

interface VideoProps {
  mainVideo: {
    asset?: {
      url?: string;
    } | null;
  } | null;
}

export function HeroSection({ mainVideo }: VideoProps) {
  // Check if video asset exists
  if (!mainVideo?.asset?.url) {
    return null;
  }
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-auto pt-16 sm:pt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-full "
        src={mainVideo.asset.url}
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-3/4 w-full md:px-8 lg:px-16 ">
        <div className="max-w-xl mx-4 md:mx-8 text-black text-xl sm:text-2xl md:text-4xl lg:text-5xl text-left">
          <div className="flex">
            <p
              style={{ transitionDuration: "1500ms" }}
              className={` transition-all ease-out ${isLoaded ? "translate-x-0" : "-translate-x-full"}`}
            >
              take that for bad
            </p>
            <p
              style={{ transitionDuration: "11000ms" }}
              className={`italic text-zinc-600 ${isLoaded ? "translate-y-0" : " opacity-0 -translate-y-full"}`}
            >
              s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
