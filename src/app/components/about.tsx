import { About } from "@/sanity/types";

export default function AboutSection({ about }: { about: About }) {
  return (
    <div className="bg-zinc-200">
      <h1 className="font-bold text-xl md:text-2xl lg:text-5xl text-center p-[2vw]">
        ABOUT
      </h1>
      <div className="flex justify-center py-[3vw]">
        <iframe
          title="vimeo-player"
          src={about.embedVideo}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div>this is the link: {about.embedVideo}</div>
      <div>this is the content: {about.content}</div>
    </div>
  );
}
