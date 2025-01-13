import { sanityFetch } from "@/sanity/live";
import { REISEGEWERBE_QUERY } from "@/sanity/queries";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

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

export default async function ({ content }: { content: PortableTextBlock[] }) {
  const { data: reisegewerbe } = await sanityFetch({
    query: REISEGEWERBE_QUERY,
  });

  return (
    <div className="">
      <h1 className="pt-[13vw] md:pt-[9vw] lg:pt-[7vw] p-[1vw] font-bold text-xl md:text-2xl lg:text-5xl text-center">
        {reisegewerbe.title}
      </h1>
      <h2 className="italic text-lg md:text-xl lg:text-3xl p-[1vw] text-center">
        {reisegewerbe.subtitle}
      </h2>
      <div className="text-md xl:text-xl py-[2vw] px-[6vw]">
        <PortableText
          value={reisegewerbe.description}
          components={components}
        />
      </div>
    </div>
  );
}
