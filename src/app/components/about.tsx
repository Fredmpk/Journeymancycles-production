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
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold mb-2">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 my-4">
        {children}
      </blockquote>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold pb-4">{children}</h4>
    ),
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
  console.log("about", about.content);

  return (
    <div className="bg-zinc-200 pt-16 sm:pt-20" id="about">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center pb-8 tracking-widest">
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

      <div className="p-[4vw] tracking-wider">
        <PortableText value={about.content || []} components={components} />
      </div>
    </div>
  );
}
