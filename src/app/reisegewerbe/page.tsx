import { sanityFetch } from "@/sanity/live";
import { IMPRESSUM_QUERY, REISEGEWERBE_QUERY } from "@/sanity/queries";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import Footer from "../components/footer";

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

export default async function ReisegewerbePage() {
  const { data: reisegewerbe } = await sanityFetch({
    query: REISEGEWERBE_QUERY,
  });

  return (
    <div className="">
      <h1 className="pt-16 sm:pt-20 p-[1vw] font-bold text-xl md:text-2xl lg:text-5xl text-center">
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
