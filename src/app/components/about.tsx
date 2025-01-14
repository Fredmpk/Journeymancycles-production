import { About } from "@/sanity/types";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => {
      if (!children || (Array.isArray(children) && children.length === 0)) {
        return <div className="my-4" />;
      }
      return <p className="mb-4">{children}</p>;
    },
    h1: ({ children }) => <h1 className="text-2xl mb-4">{children}</h1>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <span className="font-bold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
};
export default function AboutSection({ about }: { about: About }) {
  return (
    <div className="bg-zinc-200 p-[10vw] md:pt-[7vw]" id="about">
      <h1 className="font-bold text-xl md:text-2xl lg:text-5xl text-center p-[2vw]">
        ABOUT
      </h1>
      <div className="flex justify-center py-[3vw]">
        <iframe
          title="vimeo-player"
          src={about.embedVideo}
          width="640"
          height="360"
          allowFullScreen
        ></iframe>
      </div>

      <div>
        <PortableText value={about.content || []} components={components} />
      </div>
    </div>
  );
}
