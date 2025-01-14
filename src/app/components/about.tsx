import { About } from "@/sanity/types";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => {
      if (!children || (Array.isArray(children) && children.length === 0)) {
        return <div className="py-4" />;
      }
      return <p className="pb-4">{children}</p>;
    },
    h1: ({ children }) => <h1 className="text-2xl pb-4">{children}</h1>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 pb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 pb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pb-2">{children}</li>,
    number: ({ children }) => <li className="pb-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <span className="font-bold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};
export default function AboutSection({ about }: { about: About }) {
  return (
    <div className="bg-zinc-200 pt-[9vw] md:pt-[7vw]" id="about">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center p-[1vw]">
        ABOUT
      </h1>
      <div className="flex justify-center py-[3vw]">
        <iframe
          title="vimeo-player"
          src={about.embedVideo}
          width="960"
          height="490"
          allowFullScreen
          className="w-full max-h-[40vh] lg:max-h-full aspect-ratio"
        ></iframe>
      </div>

      <div>
        <PortableText value={about.content || []} components={components} />
      </div>
    </div>
  );
}
