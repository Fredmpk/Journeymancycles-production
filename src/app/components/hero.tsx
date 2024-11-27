import { client } from "@/sanity/client";

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

  return (
    <div className="relative w-full h-auto">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-full pt-[11vw] md:pt-[7vw]"
        src={mainVideo.asset.url}
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-3/4 w-full h-full px-4 md:px-8 lg:px-16">
        <div className="max-w-xl mx-4 md:mx-8 text-black text-xl sm:text-2xl md:text-4xl lg:text-5xl text-left">
          <div>
            <p>
              Take that for Good
              <span className="italic text-zinc-600">s</span>
              <span> -</span>
            </p>
          </div>
          <p>langlebige Lastenräder</p>
        </div>
      </div>
    </div>
  );
}
