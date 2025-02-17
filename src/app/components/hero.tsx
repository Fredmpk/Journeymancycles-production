"use client";
import { client } from "@/sanity/client";
import { log } from "console";
import { useEffect, useState } from "react";

interface VideoProps {
  hero: {
    mainVideoQuer: {
      asset?: {
        url?: string;
      } | null;
    } | null;
    mainVideoHoch: {
      asset?: {
        url?: string;
      } | null;
    } | null;
  };
}

export function HeroSection({ hero }: VideoProps) {
  // Check if video asset exists
  if (!hero.mainVideoQuer?.asset?.url || !hero.mainVideoHoch?.asset?.url) {
    return null;
  }
  const [isLoaded, setIsLoaded] = useState(false);
  console.log("hero:");
  console.log(hero);
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
        className="w-full h-[90vh] object-cover max-w-full md:hidden"
        src={hero.mainVideoHoch.asset.url}
      >
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-full hidden md:block"
        src={hero.mainVideoQuer.asset.url}
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-3/4 left-[55%] w-full transform -translate-x-1/2">
        <div className="max-w-xl mx-4 md:mx-8 text-black text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
          <div className="flex text-white">
            <p
              style={{ transitionDuration: "1500ms" }}
              className={` transition-all ease-out ${isLoaded ? "translate-x-0" : "-translate-x-full"}`}
            >
              take that for good
            </p>
            <p
              style={{ transitionDuration: "11000ms" }}
              className={`italic text-zinc-200 ${isLoaded ? "translate-y-0" : " opacity-0 -translate-y-full"}`}
            >
              s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
